const express = require('express');
const models = require('../models/');
const passport = require('../middlewares/authentication');
const redirect = require('../middlewares/redirect');


const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', redirect.isLoggedIn, this.index);
    router.get('/', this.show);
    return router;
  },
  index(req, res) {
    res.render('activity', { user: req.user, success: req.flash('success')});
  },
  show (req, res) {
    models.Service.findAll({
      where: {
        UserId: user.id,
      }
    }) 
    .then((requested_service) => {
      res.render('activity', {services: requested_service});
    });
  },
};

module.exports = Controller.registerRouter();
