const express = require('express');
const models = require('../models/');
const passport = require('../middlewares/authentication');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.signup);

    return router;
  },
  index(req, res) {
    res.render('signup');
  },
  signup(req, res) {
    models.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then((user) => {
      // generate e token for emial confirmation
      req.login(user, () => {
        res.redirect('/');
      });
    });
  }
};

module.exports = Controller.registerRouter();
