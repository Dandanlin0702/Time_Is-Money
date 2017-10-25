const express = require('express');
//const User = require('../models/user');
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
    models.Users.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lasttName,
      email: req.body.email,
      password: req.body.password
    }).then((user) => {
      // generate e token for emial confirmation
      req.login(user, () => {
        res.redirect('/profile');
      });
    });
  }
};

module.exports = Controller.registerRouter();
