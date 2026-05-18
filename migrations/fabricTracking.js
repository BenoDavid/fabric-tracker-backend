'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fabricTrackings', {
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
      },
      // --- Basic Info ---
      deptNbr: { type: Sequelize.STRING },
      brand: { type: Sequelize.STRING },
      seasonYear: { type: Sequelize.STRING },
      fabricMillName: { type: Sequelize.STRING },
      mainFabricCoo: { type: Sequelize.STRING },
      mainFabricType: { type: Sequelize.STRING },
      mainFabricContent: { type: Sequelize.TEXT },
      fabricType: { type: Sequelize.STRING },
      fabricWeight: { type: Sequelize.STRING },
      styleVendor: { type: Sequelize.STRING },
      productDescription: { type: Sequelize.TEXT },
      plannedColor: { type: Sequelize.STRING },
      griegePlacedDate: { type: Sequelize.DATEONLY },
      cbdPlacedDate: { type: Sequelize.DATEONLY },
      orderQty: { type: Sequelize.DECIMAL(10, 2) },
      uom: { type: Sequelize.STRING },

      // --- Product Development (MAP/Quality/JD) ---
      mapQualityApprovalPlanned: { type: Sequelize.DATEONLY },
      mapQualityApprovalActual: { type: Sequelize.DATEONLY },
      mapQualityResult: { type: Sequelize.STRING },
      devCountersJdPlanned: { type: Sequelize.DATEONLY },
      devCountersJdActual: { type: Sequelize.DATEONLY },
      devCountersJdResult: { type: Sequelize.STRING },
      labDipApprovalPlanned: { type: Sequelize.DATEONLY },
      labDipApprovalActual: { type: Sequelize.DATEONLY },
      labDipResult: { type: Sequelize.STRING },
      shadeBandApprovalPlanned: { type: Sequelize.DATEONLY },
      shadeBandApprovalActual: { type: Sequelize.DATEONLY },
      shadeBandResult: { type: Sequelize.STRING },

      // --- Bulk & Compliance ---
      muPlanDate: { type: Sequelize.DATEONLY },
      muActualDate: { type: Sequelize.DATEONLY },
      muResult: { type: Sequelize.STRING },
      reportNbr: { type: Sequelize.STRING },
      ppFabricPlanDate: { type: Sequelize.DATEONLY },
      ppFabricActualDate: { type: Sequelize.DATEONLY },
      ppResult: { type: Sequelize.STRING },
      fabricEtdPlanned: { type: Sequelize.DATEONLY },
      fabricEtdActual: { type: Sequelize.DATEONLY },
      bulkResult: { type: Sequelize.STRING },
      griegeTcPlanned: { type: Sequelize.DATEONLY },
      griegeTcActual: { type: Sequelize.DATEONLY },
      griegeTcResult: { type: Sequelize.STRING },
      fabricTcPlanned: { type: Sequelize.DATEONLY },
      fabricTcActual: { type: Sequelize.DATEONLY },
      fabricTcResult: { type: Sequelize.STRING },
      mainFabricMillCode: { type: Sequelize.STRING },
      madRemarks: { type: Sequelize.TEXT },
      bulkRemarks: {type: Sequelize.TEXT },
      complianceRemarks: {type: Sequelize.TEXT },
      pdRemarks: {type: Sequelize.TEXT },
      madEntryBy: { type: Sequelize.STRING },
      madTimestamp: { type: Sequelize.DATE },
      bulkEntryBy: { type: Sequelize.STRING },
      bulkTimestamp: { type: Sequelize.DATE },
      complianceEntryBy: { type: Sequelize.STRING },
      complianceTimestamp: { type: Sequelize.DATE },
      pdEntryBy: { type: Sequelize.STRING },
      pdTimestamp: { type: Sequelize.DATE },

      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE }
    });
  },
   async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fabricTrackings');
  }
};