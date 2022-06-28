"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Committer = void 0;
class Committer {
    constructor(name, presence) {
        this.name = name;
        this.presence = presence;
        this.criteriaList = [];
    }
    getCriteriaList(criteria) {
        this.criteriaList = criteria.classes;
    }
    get list() {
        return this.criteriaList;
    }
}
exports.Committer = Committer;
