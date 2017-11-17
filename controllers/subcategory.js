const express = require('express');
const models = require('../models/');
// const passport = require('../middlewares/authentication');
// const redirect = require('../middlewares/redirect');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:category', this.show);

    return router;
  },
  index(req, res) {
    res.render('subcategory')
  },
  show(req, res) {
    models.Category.findOne({
      where: {
        category_name: 'tutoring'
      },
      include: [{
          model: models.SubCategory,
      }],
    }).then((cat) => {
      //console.log(allServices);
      res.render('subcategory', {allSubCat: cat.SubCategories});
    });
  }
};

module.exports = Controller.registerRouter();
