const express = require('express');
const models = require('../models/');
const passport = require('../middlewares/authentication');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);

    return router;
  },
  index(req, res) {
    res.render('servicecheck');
  }
};

module.exports = Controller.registerRouter();
