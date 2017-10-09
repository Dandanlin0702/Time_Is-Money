const express = require('express');
const models = require('../models');


const router = express.Router();


router.get('/', (req, res) => {
  // res.json({
  //   msg: "Successful GET to '/' route"
  // });
  res.render('home');
});

router.get('/login', (req, res) => {
  // res.json({
  //   msg: "Successful GET to '/' route"
  // });
  res.render('login');
});

router.get('/signup', (req, res) => {
  /*res.json({
    msg: "Successful POST to '/' route"
  });*/
  res.render('signup');
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
