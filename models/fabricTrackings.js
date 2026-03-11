const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class fabricTracking extends Model {}

  fabricTracking.init({
    deptNbr: DataTypes.STRING,
    brand: DataTypes.STRING,
    seasonYear: DataTypes.STRING,
    fabricMillName: DataTypes.STRING,
    mainFabricCoo: DataTypes.STRING,
    mainFabricType: DataTypes.STRING,
    mainFabricContent: DataTypes.TEXT,
    fabricWeight: DataTypes.STRING,
    styleVendor: DataTypes.STRING,
    stockNbr: DataTypes.STRING,
    productDescription: DataTypes.TEXT,
    plannedColor: DataTypes.STRING,
    orderQty: DataTypes.DECIMAL(10, 2),
    uom: DataTypes.STRING,
    
    // Dates are handled as DATEONLY (YYYY-MM-DD) to match your sheet
    griegePlacedDate: DataTypes.DATEONLY,
    cbdPlacedDate: DataTypes.DATEONLY,
    
    // Quality & Development
    mapQualityApprovalPlanned: DataTypes.DATEONLY,
    mapQualityApprovalActual: DataTypes.DATEONLY,
    mapQualityResult: DataTypes.STRING,
    
    devCountersJdPlanned: DataTypes.DATEONLY,
    devCountersJdActual: DataTypes.DATEONLY,
    devCountersJdResult: DataTypes.STRING,

    labDipApprovalPlanned: DataTypes.DATEONLY,
    labDipApprovalActual: DataTypes.DATEONLY,
    labDipResult: DataTypes.STRING,

    shadeBandApprovalPlanned: DataTypes.DATEONLY,
    shadeBandApprovalActual: DataTypes.DATEONLY,
    shadeBandResult: DataTypes.STRING,

    // Bulk & Logistics
    muPlanDate: DataTypes.DATEONLY,
    muActualDate: DataTypes.DATEONLY,
    muResult: DataTypes.STRING,
    reportNbr: DataTypes.STRING,
    
    ppFabricPlanDate: DataTypes.DATEONLY,
    ppFabricActualDate: DataTypes.DATEONLY,
    ppResult: DataTypes.STRING,

    fabricEtdPlanned: DataTypes.DATEONLY,
    fabricEtdActual: DataTypes.DATEONLY,
    bulkResult: DataTypes.STRING,

    griegeTcPlanned: DataTypes.DATEONLY,
    griegeTcActual: DataTypes.DATEONLY,
    griegeTcResult: DataTypes.STRING,

    fabricTcPlanned: DataTypes.DATEONLY,
    fabricTcActual: DataTypes.DATEONLY,
    fabricTcResult: DataTypes.STRING,

    mainFabricMillCode: DataTypes.STRING,
    remarks: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'fabricTracking',
    tableName: 'fabric_Trackings',
    timestamps: true // This maps camelCase to snake_case in the DB
  });

  return fabricTracking;
};