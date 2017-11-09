const express = require('express');
const models = require('../models');
const passport = require('../middlewares/authentication');
const redirect = require('../middlewares/redirect');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', redirect.isLoggedIn, this.index);
    router.get('/new', this.new);
    router.post('/', this.create);
    router.get('/:id', this.show);

    return router;
  },
  index(req, res) {
    res.render('profile', { user: req.user, success: req.flash('success')});
  },
  new(req, res) {
    res.render('profile', {layouts: true});
    // models.SubCategory.findAll()
    // .then((subcategories) => {
    //   res.render('profile', { user: req.user, subcategories: subcategories});
    // });
  },
  create(req, res) {
    res.redirect('profile/offer_form_show');
  },
  show(req, res) {
    res.render('profile/offer_form_show');
  },


};

module.exports = Controller.registerRouter();
