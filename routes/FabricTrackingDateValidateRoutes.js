// src/routes/stFacilityRouter.js
const fabricTrackingDateValidateController = require('../controllers/fabricTrackingDateValidateController');
const BaseRouter = require('./BaseRouter');

const fabricTrackingDateValidateRouter = new BaseRouter(fabricTrackingDateValidateController);

module.exports = fabricTrackingDateValidateRouter.getRouter();