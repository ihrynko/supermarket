"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        this.offers = [];
    }
    getOffers(offers = []) {
        this.offers = offers;
    }
}
exports.Student = Student;
