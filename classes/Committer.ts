import { TUniversity, IPerson } from '../types/types';
import { Student } from './Student';
import { Criteria } from './University';

export class Committer implements IPerson {

    protected criteriaList: TUniversity[] = [];

    constructor(public name: string, public presence: boolean) { }
    
     getCriteriaList(criteria: Criteria) {
        this.criteriaList = criteria.classes;
     }
    get list() {
        return this.criteriaList;
    }
}