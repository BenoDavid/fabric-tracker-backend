'use strict';
const db = require('../models');
const BaseController = require('./BaseController');
const { fabricTracking, fabricTrackingDateValidate } = db.sequelizeDb2.models;

/**
 * Controller for handling Product Development, Compliance, and Bulk tracking.
 * Extends a BaseController for standard CRUD functionality.
 */
class fabricTrackingDateValidateController extends BaseController {
  constructor() {
    // Pass the fabricTrackingDateValidate model to the BaseController constructor
    super(fabricTrackingDateValidate);
  }


}

module.exports = new  fabricTrackingDateValidateController();