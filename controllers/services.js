const express = require('express');
const models = require('../models/');
const redirect = require('../middlewares/redirect');
const capitalize = require('../middlewares/capitalize');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:category/:subcategory', this.show);
    router.get('/:category/:subcategory/:service_id', redirect.isLoggedIn, this.show_detail);
    router.post('/:category/:subcategory/:service_id', this.create_request);

    return router;
  },
  index(req, res) {
    res.redirect('/');
  },
  show(req, res) {
    req.params.category = capitalize.titleCase(req.params.category);
    models.Category.findOne({
      where: {
        category_name: req.params.category
      },
      include: [
        {
          model: models.SubCategory
        }
      ]
    }).then((categories) => {
      req.params.subcategory = capitalize.titleCase(req.params.subcategory);
      models.SubCategory.findOne({
        where: {
          subcategory_name: req.params.subcategory
        },
        include: [
          {
            model: models.Service
          }
        ]
      }).then((services) => {
        if (categories === null || services === null) {
          res.redirect('/');
        } else {
          res.render('services', {
            Category: req.params.category,
            SubCategory: req.params.subcategory,
            allSubCategories: categories.SubCategories,
            allServices: services.Services
          });
        }
      });
    });
  },
  show_detail(req, res) {
    service_id = req.params.service_id;
    models.Service.findOne({
      where: {
        id: service_id
      },
      include: [
        {
          model: models.SubCategory,
          include: [
            {
              model: models.Category
            }
          ]
        }, {
          model: models.User
        }
      ]
    }).then((service) => {
      //res.send(service);
      res.render('service_detail', {service: service});
    })
  },
  create_request(req, res) {
    datetime = req.body.datetime;
    num_hours = req.body.num_hours;
    user_id = req.user.id;
    service_id = req.body.service_id;

    //res.send(datetime)
    models.RequestedService.create({is_accepted: 0, requested_datetime: datetime, num_hours: parseInt(num_hours), UserId: user_id, ServiceId: service_id}).then((requestservice) => {
      if (requestservice === null) {
        req.flash("error", "Error creating request!");
        res.redirect("/profile");
      } else {
        req.flash("success", "Request sent! Awaiting approval...");
        res.redirect("/activity#request");
      }
    });
  }
};

module.exports = Controller.registerRouter();
