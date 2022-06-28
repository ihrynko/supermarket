import { IPerson, TUniversity } from '../types/types';


export class Student implements IPerson {
    private offers: TUniversity[] = [];
    constructor(public name: string, public grade: number) { }
    public getOffers(offers: TUniversity[] = []) {
        this.offers = offers;
  }
}