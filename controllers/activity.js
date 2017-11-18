const express = require('express');
const models = require('../models/');
const passport = require('../middlewares/authentication');
const redirect = require('../middlewares/redirect');


const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', redirect.isLoggedIn, this.index);
    router.get('/:id', this.show);

    return router;
  },
  index(req, res) {
    models.RequestedService.findAll({
      where: {
        UserId: req.user.id,
      }
    }) 
    .then((requested_service) => {
        models.Service.findAll({
        where: {
          UserId: req.user.id,
        }
      }) 
      .then((offered_service) => {
        res.render('activity', {servicesreq: requested_service, servicesoff: offered_service});
      });
    });
  },
  show(req, res) {
    res.render('profile/offer_form_show');
  },
};

module.exports = Controller.registerRouter();
