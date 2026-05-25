"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCost = actionCost;
exports.actionRisks = actionRisks;
function actionCost(cost = {}) {
    return {
        centralStaffHours: 0,
        durationWeeks: 1,
        fatigue: 0,
        leaderHours: 0,
        money: 0,
        recurringWeeklyCost: 0,
        regionalStaffHours: 0,
        volunteerHours: 0,
        ...cost,
    };
}
function actionRisks(risks = {}) {
    return {
        coalitionDamage: 0,
        counterMobilization: 0,
        detection: 0,
        internalFaction: 0,
        legal: 0,
        longTermTrust: 0,
        mediaBacklash: 0,
        messageDiscipline: 0,
        scandal: 0,
        ...risks,
    };
}
