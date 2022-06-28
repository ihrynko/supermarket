import {TUniversity, University} from '../types/types'

export class Criteria {
    private _coursers: TUniversity[] = [
    { specialization: "Computer science", mingrade: 180, price:1200, university: University.KNU },
    { specialization: "Computer science", mingrade: 170,price:1500, university: University.LNU },
    { specialization: "Computer science", mingrade: 190,price:1300, university: University.LPU },
    { specialization: "Computer science", mingrade: 190,price:1400, university: University.KPI },
    ];
        get classes() {
        return this._coursers;
    }
}