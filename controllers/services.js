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
    req.params.subcategory = req.params.subcategory.toLowerCase();
    models.SubCategory.findAll({}).then((subcategories) => {
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
    datatime = req.body.datatime;
    res.send(datatime);
  }
};

module.exports = Controller.registerRouter();
