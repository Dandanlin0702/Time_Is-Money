const express = require('express');
const models = require('../models/');
const passport = require('../middlewares/authentication');
const redirect = require('../middlewares/redirect');

const Controller = {
   registerRouter() {
   const router = express.Router();
      router.get('/', redirect.isLoggedIn, this.index);
      //router.get('/:id', this.show);
      router.delete('/:id', this.delete);
      router.put('/accept/:id', this.accept);
      router.put('/reject/:id', this.reject);
      //router.get('/accept/update/:num_hours', this.add_hours);
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
               where: {
                  status: "PENDING"
               },
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
      models.RequestedService.findAll({
         include: [{
            model: models.Service,
            where: {
               UserId: req.user.id
            },
            include: [{
               model: models.User
            }]
         }],
         where: {
            id: parseInt(req.params.id)
         }
      }).then((requested_service) => {
         const original_hours = requested_service[0].Service.User.balance;
         const num_hours = requested_service[0].num_hours;
         const serviceId = requested_service[0].ServiceId;
         const offeringUserId = requested_service[0].Service.UserId;

         const requestUserId = requested_service[0].UserId;

         const total_hours = original_hours + num_hours;

         models.RequestedService.update({
            status: "IN PROGRESS"
         }, {
            where: {
               id: parseInt(req.params.id)
            }
         });

         models.User.update({
            balance: total_hours
         }, {
            where: {
               id: offeringUserId
            }
         });

         models.User.findAll({
            where: {
               id: parseInt(requestUserId)
            }
         }).then((requestedUser) => {
            //res.send(requestedUser);
            const original_hours_ru = requestedUser[0].balance;

            const total = original_hours_ru - num_hours;

            models.User.update({
               balance: total
            }, {
               where: {
                  id: requestedUser[0].id
               }
            });
            res.redirect('/activity');
         });
      });
   },

   reject(req, res) {
      models.RequestedService.findAll({
         include: [{
            model: models.Service,
            where: {
               UserId: req.user.id
            },

            include: [{
               model: models.User
            }]
         }],

         where: {
            id: parseInt(req.params.id)
         }

         }).then((requested_service) => {
            models.RequestedService.update({
               status: "REJECTED"
            }, {
               where: {
                  id: parseInt(req.params.id)
               }
            }).then(() => {
               res.redirect('/activity');
         });
      });
   },
};

module.exports = Controller.registerRouter();
