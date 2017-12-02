const express = require('express');
const models = require('../models/');
const passport = require('../middlewares/authentication');
const redirect = require('../middlewares/redirect');


const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', redirect.isLoggedIn, this.index);
    router.get('/:id', this.show);
    router.delete('/:id', this.delete);

    return router;
  },
  index(req, res) {
     //offer service
     models.Service.findAll({
        where: {
           UserId: req.user.id,
        }
     }).then((offered_service) => {
        models.RequestedService.findAll({
           include: [{model: models.Service}],
           where: {
             UserId: req.user.id,
          }
       }).then((services) => {
          res.render('activity', {servicesreq: services, servicesoff: offered_service});
       });
     });
  },
  show(req, res) {
    res.render('profile/offer_form_show');
  },
  delete(req, res) {
     models.RequestedService.destroy({
       where: {
          ServiceId: req.params.id,
       },
    }).then(() => {
      models.Service.destroy({
         where: {
           id: req.params.id,
         },
      }).then(() => {
            res.redirect('/activity');
         });
      });
   },
};

module.exports = Controller.registerRouter();
