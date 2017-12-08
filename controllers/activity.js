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
           UserId: req.user.id
        }
     }).then((my_offers) => {
        models.RequestedService.findAll({
           include: [{
              model: models.Service
           }],
           where: {
              UserId: req.user.id
           }
        }).then((my_requests) => {
          models.RequestedService.findAll({
            include: [{
               model: models.Service,
               where: {
                  UserId: req.user.id
               },
               include: [{
                 model: models.User
               }]
            }]
          }).then((requested_services) => {
            //res.send(requested_services);
            res.render('activity', {
               servicesreq: my_requests,
               servicesoff: my_offers,
               requested_services: requested_services
            });
          });
        });
     });
   },
   show(req, res) {
      res.render('profile/offer_form_show');
   },
   delete(req, res) {
      models.RequestedService.destroy({
         where: {
            UserId: req.user.id,
            ServiceId: req.params.id
         }
      }).then(() => {
         models.Service.destroy({
            where: {
               UserId: req.user.id,
               id: req.params.id
            }
         }).then(() => {
            res.redirect('/activity');
         });
      });
   }
};

module.exports = Controller.registerRouter();
