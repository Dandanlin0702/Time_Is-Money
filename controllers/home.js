const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication')

const router = express.Router();


router.get('/signup', (req, res) => {
  /*res.json({
    msg: "Successful POST to '/' route"
  });*/
  res.render('signup');
});

router.post('/sign-up', (req, res) => {
   models.Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lasttName,
      email: req.body.email,
      password_hash: req.body.password,
   }).then((user) => {
      // generate e token for emial confirmation
      req.login(user, () => {
         res.redirect('/profile');
      });
   });
});

router.get('/login', (req, res) => {
  // res.json({
  //   msg: "Successful GET to '/' route"
  // });
  res.render('login');
});

router.post('/login', (req, res) => {
   passport.authenticate('local', {
       successRedirect: '/profile',
       failureRedirect: '/login',
     })(req, res);
});

router.get('/logout', (req, res) => {
   res.logout();
   res.redirect('/login');
});

router.get('/profile',
   passport.redirectIfNotLoggedIn('/profile'),
   (req, res) => {
      res.render('profile');
});

router.get('/', (req, res) => {
  // res.json({
  //   msg: "Successful GET to '/' route"
  // });
  res.render('home');
});





router.put('/:id', (req, res) => {
  res.json({
    msg: "Successful PUT to '/' route",
    id: req.params.id
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    msg: "Successful DELETE to '/' route",
    id: req.params.id
  });
});

/*
router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    // res.redirect('/users/' + req.user.username);
  });
*/

module.exports = router;
