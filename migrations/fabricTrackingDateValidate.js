'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fabricTrackingDateValidates', {
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
      },
      fabType: { type: Sequelize.STRING },
      lapDip: { type: Sequelize.TINYINT },
      shadeBand: { type: Sequelize.TINYINT },
      ppFabric: { type: Sequelize.TINYINT },
      fabricETD: { type: Sequelize.TINYINT },
      MU: { type: Sequelize.TINYINT },
      fabricTC: { type: Sequelize.TINYINT },
      griegeTC: { type: Sequelize.TINYINT },
      mapFabric: { type: Sequelize.TINYINT },
      devCounters: { type: Sequelize.TINYINT },
      isActive: { type: Sequelize.TINYINT },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE }
    });
  },
   async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fabricTrackingDateValidates');
  }
};