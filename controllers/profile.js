const express = require('express');
const User = require('../models/user');
const passport = require('../middlewares/authentication');
const redirect = require('../middlewares/redirect');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', redirect.isLoggedIn, this.index);

    return router;
  },
  index(req, res) {
    res.render('profile', { user: req.user, success: req.flash('success')});
  }
};

module.exports = Controller.registerRouter();
