"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionCommittee = void 0;
class SelectionCommittee {
    constructor() {
        this.criteriaList = [];
        this.mingrade = 140;
        this.offers = [];
        this.isOpen = false;
    }
    open(committer) {
        if (committer.presence === false) {
            throw new Error('The selection committer is absent');
        }
        this.isOpen = true;
        this.criteriaList = committer.list;
    }
    checkStudents(student) {
        if (student.grade < this.mingrade) {
            throw new Error('Sorry, your grade is too low');
        }
        Object.entries(this.criteriaList).forEach(([_, criteria]) => {
            if (student.grade >= this.mingrade && student.grade <= criteria.mingrade) {
                throw new Error(`Your grade is too low to get a budget place, but you enter into a contract for ${criteria.price}`);
            }
            this.offers.push(criteria);
        });
        this.sendOffers(student);
    }
    sendOffers(student) {
        student.getOffers(this.offers);
        this.offers = [];
    }
    close() {
        this.isOpen = false;
    }
}
exports.SelectionCommittee = SelectionCommittee;
