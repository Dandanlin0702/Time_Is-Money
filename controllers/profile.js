const express = require('express');
const User = require('../models/user');
const passport = require('../middlewares/authentication');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', redirectIfNotLoggedIn('/profile'), this.index);

    return router;
  },
  index(req, res) {
    res.render('profile');
  }
};
