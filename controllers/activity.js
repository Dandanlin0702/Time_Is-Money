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
      // router.get('/accept/update/:num_hours', this.add_hours);

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
   // show(req, res) {
   //    res.render('profile/offer_form_show');
   // },
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

       models.RequestedService.update(
         {status: "IN PROGRESS"},
         {where: {
           id: parseInt(req.params.id)
         }}
       );

       models.User.update(
         {balance: total_hours},
         {where: {
           id: offeringUserId
         }}
       );

       models.User.findAll({
          where: {
            id: parseInt(requestUserId)
          }
       }).then((requestedUser) => {
         //res.send(requestedUser);
         const original_hours_ru = requestedUser[0].balance;

         const total = original_hours_ru - num_hours;

         models.User.update(
           {balance: total},
           {where: {
             id: requestedUser[0].id
           }}
         );
         res.redirect('/activity');
       });
     });

     // models.RequestedService.findById(parseInt(req.params.id)
     // ).then((requested_service) => {
     //   include: [{
     //       model: models.Service,
     //       where: {
     //         ServiceId: requested_service.ServiceId
     //       }
     //    }]
     //  }).then((service) => {
     //    res.json(service);
     //  //});
     //   // requested_services.update({
     //   //   status: "IN PROGRESS"
     //   // });
     // //
     // // }).then((service) => {
     // //   res.send(service);
     // //   //models.User.findById(service.)
     // });

      // models.RequestedService.update({
      //    status: "IN PROGRESS"
      // }).then((reveived_services) => {
      //    models.RequestedService.findAll({
      //       include: [{
      //          model: models.User,
      //          where: {
      //             id: req.params.id
      //          },
      //          include: [{
      //             model: models.Service,
      //             where: {
      //                UserId: req.params.id
      //             },
      //          }]
      //       }],
      //       where: {
      //          UserId: req.params.id
      //       },
      //    }).then(() => {
      //       models.User.increment({
      //          balance: reveived_services[0],
      //       }, {
      //          where: {
      //             id: req.user.id
      //          }
      //       }).then(() => {
      //          models.User.update({
      //             balance: req.user.balance-reveived_services[0]
      //          }, {
      //             where: {
      //                id: req.params.id
      //             }
      //          }).then(() => {
      //             res.redirect('/activity');
      //          });
      //       });
      //    });
      // });
   },
   reject(req, res) {


      // models.RequestedService.update({
      //    status: "REJECTED"
      // }, {
      //    where: {
      //       UserId: req.params.id
      //    }
      // }).then(() => {
      //    res.redirect('/activity');
      // });
   },
   // add_hours(req, res) {
   //    models.User.update({
   //       balance: parseInt(req.user.balance)+parseInt(req.params.num_hours)
   //    }, {
   //       where: {
   //          id: req.user.id
   //       },
   //    }).then(() => {
   //        res.redirect('/activity');
   //    });
   // },
};

module.exports = Controller.registerRouter();
