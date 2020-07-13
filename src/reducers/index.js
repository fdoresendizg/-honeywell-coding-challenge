import { combineReducers } from 'redux';

import StudentsListReducer from './students-reducer';
import StudentReducer from './student-reducer';

export default combineReducers({
    list: StudentsListReducer,
    student: StudentReducer,
});