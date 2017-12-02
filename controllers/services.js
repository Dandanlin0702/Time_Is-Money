const express = require('express');
const models = require('../models/');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:category/:subcategory', this.show);
    router.get('/:category/:subcategory/:service_id', this.serviceInfo);

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
    models.Category.findOne({
      where: {
        category_name: decodeURI(req.params.category)
      },
      include: [
        {
          model: models.SubCategory
        }
      ]
    }).then((categories) => {
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
        console.log(req.params.category);
        res.render('services', {
          Category: req.params.category,
          SubCategory: req.params.subcategory,
          allSubCategories: categories.SubCategories,
          allServices: services.Services
        });
      });
    });
  },
  serviceInfo(req, res) {
    res.send("This is service info!");
  }
};

module.exports = Controller.registerRouter();
