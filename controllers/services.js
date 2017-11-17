const express = require('express');
const models = require('../models/');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.get('/:subcategory', this.show);

    return router;
  },
  index(req, res) {
    models.Service.findAll({}).then((allServices) => {
      res.render('services', {allServices});
    });
    //res.render('subcategory')
  },
  show(req, res) {
    models.Service.findAll({
      where: {
        SubCategoryId: 1
      }
    }).then((allServices) => {
      //console.log(allServices);
      res.render('services', {allServices});
    });
  }
};

module.exports = Controller.registerRouter();
