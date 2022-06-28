import { SelectionCommittee } from './classes/SelectionCommittee';
import { Student } from './classes/Student';
import { Committer } from './classes/Committer';
import {Criteria} from './classes/University'


const student = new Student('Mark', 200);
const selection = new SelectionCommittee();
const committer = new Committer('ira', true);
const criteria = new Criteria();
committer.getCriteriaList(criteria);
selection.open(committer);
selection.checkStudents(student);
selection.close();


