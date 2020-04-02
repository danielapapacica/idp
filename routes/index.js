const Router = require('express')();

const AdsController = require('../Ads/controllers.js');
const UsersController = require('../Users/controllers.js');

Router.use('/ads', AdsController);
Router.use('/users', UsersController);

module.exports = Router;