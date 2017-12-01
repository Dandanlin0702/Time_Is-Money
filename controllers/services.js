const express = require('express');
const models = require('../models/');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:subcategory', this.show);
    // router.get('/:subcategory/:service_id,' this.serviceInfo);

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
  }
};

module.exports = Controller.registerRouter();
