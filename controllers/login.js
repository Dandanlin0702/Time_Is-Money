const express = require('express');
const passport = require('../middlewares/authentication');
const redirect = require('../middlewares/redirect');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.login);

    return router;
  },
  index(req, res) {
    res.render('login');
  },
  login(req, res) {
    passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/login',
      failureFlash: true,
      successFlash: true
    })(req, res);
  }
};

module.exports = Controller.registerRouter();
