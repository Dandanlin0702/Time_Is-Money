const express = require('express');
const models = require('../models/');
const capitalize = require('../middlewares/capitalize');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:category', this.show);
    router.get('/:category/:subcategory', this.show_subcategory);

    return router;
  },
  index(req, res) {
    res.redirect('/');
  },
  show(req, res) {
    req.params.category = capitalize.titleCase(req.params.category);
    models.Category.findAll({}).then((categories) => {
      // Single out selected category and pull subcategories
      models.Category.findOne({
        where: {
          category_name: req.params.category
        },
        include: [
          {
            model: models.SubCategory
          }
        ]
      }).then((subcat) => {
        if (subcat === null) {
          res.redirect('/');
        } else {
          res.render('subcategory', {
            Category: req.params.category,
            allCategories: categories,
            allSubCategories: subcat.SubCategories
          });
        }
      });
    });
  },
  show_subcategory(req, res) {
    res.send(res);
  }
};

module.exports = Controller.registerRouter();
