const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class fabricTrackingDateValidate extends Model {}

  fabricTrackingDateValidate.init({
      fabType: DataTypes.STRING,
      lapDip: DataTypes.TINYINT,
      shadeBand: DataTypes.TINYINT,
      ppFabric: DataTypes.TINYINT,
      fabricETD: DataTypes.TINYINT,
      MU: DataTypes.TINYINT,
      fabricTC: DataTypes.TINYINT,
      griegeTC: DataTypes.TINYINT,
      mapFabric: DataTypes.TINYINT,
      devCounters: DataTypes.TINYINT,
      isActive: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'fabricTrackingDateValidate',
    tableName: 'fabricTrackingDateValidates',
    timestamps: true,
  });

  return fabricTrackingDateValidate;
};