'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fabric_Trackings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      // --- Basic Info ---
      dept_nbr: { allowNull: false, type: Sequelize.STRING },
      brand: { allowNull: false, type: Sequelize.STRING },
      season_year: { allowNull: false, type: Sequelize.STRING },
      fabric_mill_name: { allowNull: false, type: Sequelize.STRING },
      main_fabric_coo: { allowNull: false, type: Sequelize.STRING },
      main_fabric_type: { allowNull: false, type: Sequelize.STRING },
      main_fabric_content: { allowNull: false, type: Sequelize.TEXT },
      fabric_type: { allowNull: false, type: Sequelize.STRING },
      fabric_weight: { allowNull: false, type: Sequelize.STRING },
      style_vendor: { allowNull: false, type: Sequelize.STRING },
      stock_nbr: { allowNull: false, type: Sequelize.STRING },
      product_description: { allowNull: false, type: Sequelize.TEXT },
      planned_color: { allowNull: false, type: Sequelize.STRING },
      griege_placed_date: { allowNull: false, type: Sequelize.DATEONLY },
      cbd_placed_date: { allowNull: false, type: Sequelize.DATEONLY },
      order_qty: { allowNull: false, type: Sequelize.DECIMAL(10, 2) },
      uom: { allowNull: false, type: Sequelize.STRING },

      // --- Product Development (MAP/Quality/JD) ---
      map_quality_approval_planned: { allowNull: false, type: Sequelize.DATEONLY },
      map_quality_approval_actual: { allowNull: false, type: Sequelize.DATEONLY },
      map_quality_result: { allowNull: false, type: Sequelize.STRING },
      dev_counters_jd_planned: { allowNull: false, type: Sequelize.DATEONLY },
      dev_counters_jd_actual: { allowNull: false, type: Sequelize.DATEONLY },
      dev_counters_jd_result: { allowNull: false, type: Sequelize.STRING },
      lab_dip_approval_planned: { allowNull: false, type: Sequelize.DATEONLY },
      lab_dip_approval_actual: { allowNull: false, type: Sequelize.DATEONLY },
      lab_dip_result: { allowNull: false, type: Sequelize.STRING },
      shade_band_approval_planned: { allowNull: false, type: Sequelize.DATEONLY },
      shade_band_approval_actual: { allowNull: false, type: Sequelize.DATEONLY },
      shade_band_result: { allowNull: false, type: Sequelize.STRING },

      // --- Bulk & Compliance ---
      mu_plan_date: { allowNull: false, type: Sequelize.DATEONLY },
      mu_actual_date: { allowNull: false, type: Sequelize.DATEONLY },
      mu_result: { allowNull: false, type: Sequelize.STRING },
      report_nbr: { allowNull: false, type: Sequelize.STRING },
      pp_fabric_plan_date: { allowNull: false, type: Sequelize.DATEONLY },
      pp_fabric_actual_date: { allowNull: false, type: Sequelize.DATEONLY },
      pp_result: { allowNull: false, type: Sequelize.STRING },
      fabric_etd_planned: { allowNull: false, type: Sequelize.DATEONLY },
      fabric_etd_actual: { allowNull: false, type: Sequelize.DATEONLY },
      bulk_result: { allowNull: false, type: Sequelize.STRING },
      griege_tc_planned: { allowNull: false, type: Sequelize.DATEONLY },
      griege_tc_actual: { allowNull: false, type: Sequelize.DATEONLY },
      griege_tc_result: { allowNull: false, type: Sequelize.STRING },
      fabric_tc_planned: { allowNull: false, type: Sequelize.DATEONLY },
      fabric_tc_actual: { allowNull: false, type: Sequelize.DATEONLY },
      fabric_tc_result: { allowNull: false, type: Sequelize.STRING },
      main_fabric_mill_code: { allowNull: false, type: Sequelize.STRING },
      remarks: { allowNull: false, type: Sequelize.TEXT },

      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
   async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fabric_Trackings');
  }
};