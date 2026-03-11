// src/routes/stFacilityRouter.js
const fabricTrackingController = require('../controllers/fabricTrackingController');
const BaseRouter = require('./BaseRouter');

const fabricTrackingRouter = new BaseRouter(fabricTrackingController);

module.exports = fabricTrackingRouter.getRouter();