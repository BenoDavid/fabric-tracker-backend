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
    fabricType: DataTypes.STRING,
    fabricWeight: DataTypes.STRING,
    styleVendor: DataTypes.STRING,
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
    madRemarks: DataTypes.TEXT,
    bulkRemarks: DataTypes.TEXT,
    complianceRemarks: DataTypes.TEXT,
    pdRemarks: DataTypes.TEXT,
    madEntryBy: DataTypes.STRING,
    madTimestamp: DataTypes.DATE,
    bulkEntryBy: DataTypes.STRING,
    bulkTimestamp: DataTypes.DATE,
    complianceEntryBy: DataTypes.STRING,
    complianceTimestamp: DataTypes.DATE,
    pdEntryBy: DataTypes.STRING,
    pdTimestamp: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'fabricTracking',
    tableName: 'fabricTrackings',
    timestamps: true,
  });

  return fabricTracking;
};