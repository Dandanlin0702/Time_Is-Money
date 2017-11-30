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
    router.get('/get_subcategory', this.get_subcategory);
    router.get('/:id', this.show);


    return router;
  },
  index(req, res) {
    res.render('profile', { user: req.user, success: req.flash('success')});
  },
  new(req, res) {
    models.Category.findAll()
    .then((categories) => {
      models.SubCategory.findAll()
      .then((subcategories) => {
        res.render('profile/offer_service', { user: req.user, categories: categories, subcategories: null});
      })
    });
  },
  create(req, res) {
    models.Service.create({
      service_name: req.body.title,
      description: req.body.description,
      location: req.body.location,
      UserId: req.user.id,
      SubCategoryId: req.body.subcategory
    }).then(() => {
      res.redirect('/');
    })
    //res.redirect('profile/offer_form_show');
  },
  get_subcategory(req, res) {
    //console.log(req.query.category_id);  //memo: query come from get  after ?
    models.SubCategory.findAll({
      where: {
        CategoryId: req.query.category_id
      }
    })
    .then((subcategories) => {
      res.render('profile/offer_service/subcategory_select', {layout: false, subcategories: subcategories});
      //res.render('profile/subcategory_select', {layout: false});
    });
    // res.render('profile/subcategory_select', {layout: false});
  },
  show(req, res) {
    res.render('profile/offer_form_show');
  },



};

module.exports = Controller.registerRouter();
