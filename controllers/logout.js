const express = require('express');
const redirect = require('../middlewares/redirect');

const Controller = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.logout);

    return router;
  },
  logout(req, res) {
    req.logout();
    res.redirect('/');
  }
};

module.exports = Controller.registerRouter();
