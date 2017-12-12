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
      router.get('/accept/:id', this.accept);
      router.get('/reject/:id', this.reject);
      router.get('/accept/update/:num_hours', this.add_hours);

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
   },
   accept(req, res) {
      models.RequestedService.update({
         status: "IN PROGRESS"
      }, {
         where: {
            UserId: req.params.id
         }
      }).then(() => {
         res.redirect('/activity');
      });
   },
   reject(req, res) {
      models.RequestedService.update({
         status: "REJECTED"
      }, {
         where: {
            UserId: req.params.id
         }
      }).then(() => {
         res.redirect('/activity');
      });
   },
   add_hours(req, res) {
      models.User.update({
         balance: parseInt(req.user.balance)+parseInt(req.params.num_hours)
      }, {
         where: {
            id: req.user.id
         },
      }).then(() => {
          res.redirect('/activity');
      });
   },
};

module.exports = Controller.registerRouter();
