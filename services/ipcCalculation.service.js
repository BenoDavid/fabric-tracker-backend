const db = require('../models');
const { STIPCDailyScore, STOvertime, STShiftPolicy } = db.sequelizeDb2.models;
const { Op } = require('sequelize');

const {
    getLeverage,
    getSampleCode,
    getOrderRangeConfig,
} = require('../utils/ipc.helpers');

async function processIpcCalculation(item) {
    let workHours = 10;

    const minSmv = 30;
    // Normalize lineOutTime to UTC midnight for date-only field
    const rawDate = item.lineOutTime || new Date();
    const normalizedDate = new Date(Date.UTC(rawDate.getFullYear(), rawDate.getMonth(), rawDate.getDate()));

    try {
        const shiftPolicy = await STShiftPolicy.findOne({
            where: {
                effectiveFrom: { [Op.lte]: normalizedDate },
                effectiveTo: { [Op.gte]: normalizedDate }
            },
            order: [['effectiveFrom', 'DESC']] // ensures latest policy if multiple
        });

        if (shiftPolicy) {
            workHours = Number(shiftPolicy.standardHours);
            console.log('Fetched shift policy', shiftPolicy?.standardHours ?? "");
        }

    } catch (error) {
        console.error('Error fetching shift policy:', error);
        // workHours remains default = 10
    }

    let totalWorkHours = workHours;

    try {
        const overtime = await STOvertime.findOne({
            where: { date: normalizedDate, operatorId: item?.operatorId },
        });

        if (overtime) {
            totalWorkHours += Number(overtime?.hours);
        }
    } catch (error) {
        console.error('Error fetching overtime:', error);
        // Keep totalWorkHours as default 10
    }
    if (!item?.collection) {
        console.warn(`Skipping IPC calculation: missing collection for item id=${item?.id}`);
        return null;
    }

    const { collection } = item;



    const actualSmv = Number(collection.stitchingSMV || 0);
    const sampleInfo = getSampleCode(collection.sampleType);

    const leverage = getLeverage(
        collection.fabricType,
        sampleInfo.category,
        actualSmv > minSmv ? 'High' : 'Normal',
        item.isPlanned ? 'Planned' : 'UnPlanned'
    );

    const whereClause = {
        swnNo: collection.swnNo,
        sampleType: collection.sampleType,
        style: collection.style,
        date: normalizedDate,
    };

    // Find existing row for the same date
    let existing = await STIPCDailyScore.findOne({ where: whereClause });

    if (!existing) {
        const providedSmv = actualSmv + (actualSmv * leverage) / 100;
        return STIPCDailyScore.create({
            ...whereClause,
            buyer: collection.buyer,
            fabricType: collection.fabricType,
            isPlanned: item.isPlanned,
            smvSlab: actualSmv > minSmv ? 'High' : 'Simple',
            sampleCode: sampleInfo.code,
            leverage,
            qty: 1,
            workHours: totalWorkHours,
            availableMin: totalWorkHours * 60,
            actualSmv,
            providedSmv,
            smvAchieved: providedSmv,
            efficiency: Number(((providedSmv / (totalWorkHours * 60)) * 100).toFixed(2)),
            targetSmv: getOrderRangeConfig(1)?.targetedSMV,
            firstPieceInTime: item.lineInTime,
            lastPieceOutTime: item.lineOutTime,
            output: item.output || null,
            operator: item?.operator

        });
    } else {
        const newQty = existing.qty + 1;
        const providedSmv = Number(newQty > 10 ? actualSmv : actualSmv + (actualSmv * leverage) / 100).toFixed(2);
        const smvAchieved = Number(newQty * providedSmv).toFixed(2);
        const efficiency = Number(((smvAchieved / existing.availableMin) * 100).toFixed(2));

        return existing.update({
            qty: newQty,
            fabricType: collection?.fabricType ?? null,
            providedSmv,
            smvAchieved,
            efficiency,
            targetSmv: getOrderRangeConfig(newQty)?.targetedSMV,
            lastPieceOutTime: item.lineOutTime,
        });
    }
}

module.exports = { processIpcCalculation };
