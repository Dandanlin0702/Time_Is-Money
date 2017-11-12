const express = require('express');
const models = require('../models/');
// const passport = require('../middlewares/authentication');
// const redirect = require('../middlewares/redirect');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);

    return router;
  },
  index(req, res){
    models.Service.findAll({}).then((allServices) => {
      res.render('subcategory', {allServices});
  });
  //res.render('subcategory')
}
};

module.exports = Controller.registerRouter();
