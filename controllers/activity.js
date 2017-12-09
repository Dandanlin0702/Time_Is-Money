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
            // models.User.update({
            //    balance: 4
            // }, {
            //    where: {
            //       id: req.user.id
            //    }
            // })
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
         // models.RequestedService.destroy({
         //    where: {
         //       id: req.user.id,
         //    }
         // }).then(() => {
            res.redirect('/activity');
         // });
      });
   }
};

module.exports = Controller.registerRouter();
