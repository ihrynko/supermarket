 export interface IPerson {
    name: string;
}
​
export enum University {
    KNU = 'Taras Shevchenko National University of Kyiv',
    KPI = 'Igor Sikorsky Kyiv Polytechnic Institute ',
    LNU = 'Ivan Franko National University of Lviv',
    LPU = 'Lviv Polytechnic National University'
}
​
export type TUniversity = {
    specialization: string,
    mingrade: number,
    price: number,
    university: University,
}
​


