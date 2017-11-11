const express = require('express');
// const passport = require('../middlewares/authentication');
// const redirect = require('../middlewares/redirect');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);

    return router;
  },
  index(req, res) {
    res.render('subcategory')
  }
};

module.exports = Controller.registerRouter();
