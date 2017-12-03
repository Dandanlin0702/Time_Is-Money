const express = require('express');
const passport = require('../middlewares/authentication');
const redirect = require('../middlewares/redirect');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', redirect.ifLoggedIn, this.index);
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
      failureFlash: "Incorrect Email or Password",
      successFlash: true
    })(req, res);
  }
};

module.exports = Controller.registerRouter();
