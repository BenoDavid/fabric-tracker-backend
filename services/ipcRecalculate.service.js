const db = require('../models');

const { STIPCDailyScore, STOvertime, STShiftPolicy } = db.sequelizeDb2.models;
const { Op } = require('sequelize');
const { getLeverage } = require('../utils/ipc.helpers');

async function recalculateIpcDailyScore(fromDate, toDate, operator = null) {
    // Force conversion to Date
    const from = new Date(fromDate);
    const to = new Date(toDate);

    if (isNaN(from) || isNaN(to)) {
        throw new Error('Invalid fromDate or toDate');
    }

    // Normalize to UTC midnight
    const normalizedFromDate = new Date(Date.UTC(
        from.getFullYear(),
        from.getMonth(),
        from.getDate()
    ));

    const normalizedToDate = new Date(Date.UTC(
        to.getFullYear(),
        to.getMonth(),
        to.getDate()
    ));

    const whereClause = {
        date: {
            [Op.between]: [normalizedFromDate, normalizedToDate]
        }
    };

    if (operator) whereClause.operator = operator;

    const ipcRows = await STIPCDailyScore.findAll({ where: whereClause });

    if (!ipcRows.length) return [];
    let minSmv = 30;
    for (const row of ipcRows) {
        let leverage = getLeverage(
            row.fabricType,
            row.sampleType,
            row.actualSmv > minSmv ? 'High' : 'Normal',
            row.isPlanned ? 'Planned' : 'UnPlanned'
        );
        // Default work hours
        let baseWorkHours = 10;

        // Fetch shift policy
        try {
            const shiftPolicy = await STShiftPolicy.findOne({
                where: {
                    effectiveFrom: { [Op.lte]: row.date },
                    effectiveTo: { [Op.gte]: row.date }
                },
                order: [['effectiveFrom', 'DESC']]
            });

            if (shiftPolicy?.standardHours) {
                baseWorkHours = Number(shiftPolicy.standardHours);
            }
        } catch (err) {
            console.error('Shift policy fetch failed:', err);
        }

        // Fetch overtime
        let totalWorkHours = baseWorkHours;
        try {
            const overtime = await STOvertime.findOne({
                where: { date: row.date, operatorId: row.operator }
            });

            if (overtime?.hours) totalWorkHours += Number(overtime.hours);
        } catch (err) {
            console.error('Overtime fetch failed:', err);
        }

        const availableMin = totalWorkHours * 60;

        const providedSmv =
            row.qty > 10
                ? row.actualSmv
                : Number((row.actualSmv + (row.actualSmv * leverage) / 100).toFixed(2));

        const smvAchieved = Number((row.qty * providedSmv).toFixed(2));
        const efficiency = Number(((smvAchieved / availableMin) * 100).toFixed(2));

        // Update row
        await row.update({
            workHours: totalWorkHours,
            availableMin,
            providedSmv,
            smvAchieved,
            efficiency,
            leverage: leverage
        });
    }

    return ipcRows.map(r => r.id);
}

module.exports = { recalculateIpcDailyScore };
