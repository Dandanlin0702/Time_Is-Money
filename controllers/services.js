const express = require('express');
const models = require('../models/');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:subcategory', this.show);
    router.get('/:subcategory/:service_id', this.show_detail);
    router.post('/:subcategory/:service_id', this.create_request);

    return router;
  },
  index(req, res) {
    models.SubCategory.findAll({}).then((subcategories) => {
      res.render('services', {
        SubCategory: req.params.subcategory,
        allSubCategories: subcategories
      });
    });
  },
  show(req, res) {
    models.SubCategory.findAll({}).then((subcategories) => {
      models.SubCategory.findOne({
        where: {
          subcategory_name: decodeURI(req.params.subcategory)
        },
        include: [
          {
            model: models.Service
          }
        ]
      }).then((services) => {
        res.render('services', {
          SubCategory: req.params.subcategory,
          allSubCategories: subcategories,
          allServices: services.Services
        });
      });
    });
  },
  show_detail(req, res) {
    service_id = req.params.service_id;
    models.Service.findOne({
      where: {
        id: service_id
      },
      include:[
        {
          model: models.SubCategory,
          include:[
            {
              model: models.Category
            }
          ]
        },
        {
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
    user_id = req.body.user_id;
    service_id = req.body.service_id;

    //res.send(datetime)
    models.RequestedService.create({
      is_accepted: 0,
      requested_datetime: datetime,
      num_hours: parseInt(num_hours),
      UserId: user_id,
      ServiceId: service_id
    })
    .then((requestservice) => {
      res.redirect("/profile");
    });
  }
};

module.exports = Controller.registerRouter();
