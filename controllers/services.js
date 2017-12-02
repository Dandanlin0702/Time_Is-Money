const express = require('express');
const models = require('../models/');
const capitalize = require('../middlewares/capitalize');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:category/:subcategory', this.show);
    router.get('/:category/:subcategory/:service_id', this.serviceInfo);

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
  serviceInfo(req, res) {
    res.send("This is service info!");
  }
};

module.exports = Controller.registerRouter();
