'use strict';
const db = require('../models');
const BaseController = require('./BaseController');
const { fabricTracking } = db.sequelizeDb2.models;

/**
 * Controller for handling Product Development, Compliance, and Bulk tracking.
 * Extends a BaseController for standard CRUD functionality.
 */
class fabricTrackingController extends BaseController {
  constructor() {
    // Pass the fabricTracking model to the BaseController constructor
    super(fabricTracking);
  }


}

module.exports = new fabricTrackingController();