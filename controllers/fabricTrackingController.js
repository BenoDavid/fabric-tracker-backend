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

  /**
   * Overwrite or extend the create method to handle 
   * specific apparel industry logic if necessary.
   */
  async create(req, res) {
    try {
      const data = req.body;
      const record = await fabricTracking.create(data);
      return res.status(201).json({
        success: true,
        message: 'Fabric tracking record created successfully.',
        data: record
      });
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  /**
   * Custom search/filter method to find records by Brand, Season, or Mill.
   */
  async getByFilters(req, res) {
    try {
      const { brand, seasonYear, fabricMillName } = req.query;
      const whereClause = {};

      if (brand) whereClause.brand = brand;
      if (seasonYear) whereClause.seasonYear = seasonYear;
      if (fabricMillName) whereClause.fabricMillName = fabricMillName;

      const records = await fabricTracking.findAll({ where: whereClause });
      
      return res.status(200).json({
        success: true,
        count: records.length,
        data: records
      });
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  /**
   * Updates specific tracking dates.
   * Useful for the "Actual" date columns (highlighted in yellow in your spreadsheet).
   */
  async updateTrackingDates(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body; 

      const [updated] = await fabricTracking.update(updateData, {
        where: { id: id }
      });

      if (updated) {
        const updatedRecord = await fabricTracking.findByPk(id);
        return res.status(200).json({ 
            success: true, 
            message: 'Milestone dates updated.', 
            data: updatedRecord 
        });
      }
      
      return res.status(404).json({ message: 'Record not found' });
    } catch (error) {
      return this.handleError(res, error);
    }
  }
}

module.exports = new fabricTrackingController();