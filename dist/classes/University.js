"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Criteria = void 0;
const types_1 = require("../types/types");
class Criteria {
    constructor() {
        this._coursers = [
            { specialization: "Computer science", mingrade: 180, price: 1200, university: types_1.University.KNU },
            { specialization: "Computer science", mingrade: 170, price: 1500, university: types_1.University.LNU },
            { specialization: "Computer science", mingrade: 190, price: 1300, university: types_1.University.LPU },
            { specialization: "Computer science", mingrade: 190, price: 1400, university: types_1.University.KPI },
        ];
    }
    get classes() {
        return this._coursers;
    }
}
exports.Criteria = Criteria;
