import { TUniversity } from '../types/types';
import { Student } from './Student';
import { Criteria } from './University';
import { Committer } from './Committer';



export class SelectionCommittee {

    public criteriaList: TUniversity[] = [];
    public mingrade = 140;
    protected offers: TUniversity[] = [];
    public isOpen = false;

    public open(committer: Committer) {
        if (committer.presence === false) {
       throw new Error('The selection committer is absent');
        }
        this.isOpen = true;
        this.criteriaList = committer.list;
    }
     
    public checkStudents(student: Student) {
        if (student.grade < this.mingrade) {
            throw new Error('Sorry, your grade is too low')
        } 
        Object.entries(this.criteriaList).forEach(([_, criteria]) => {
                    if (student.grade >= this.mingrade && student.grade <= criteria.mingrade) {
                        throw new Error(`Your grade is too low to get a budget place, but you enter into a contract for ${criteria.price}`)
            } 
            this.offers.push(criteria);
        });
        this.sendOffers(student);
            }
    protected sendOffers(student: Student) {
        student.getOffers(this.offers);
        this.offers = [];
    }
    public close() {
    this.isOpen = false;
    }

    }
    
  


   