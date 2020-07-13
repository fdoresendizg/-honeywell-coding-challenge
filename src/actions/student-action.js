import { GET_STUDENT_SUCCESS, GET_STUDENT_FAILURE, ADD_STUDENT_SUCCESS } from './index';
import { AddStudent } from '../services/student-service';
import { getStudents } from './students-action';
import store from '../utils/store';

export const getStudentById = (studentId) =>
    dispatch => {
        let students = store.getState().list.students;
        const found = students.findIndex(student => student.id === studentId);
        if ( found >= 0 ) {
            dispatch({
                type: GET_STUDENT_SUCCESS,
                payload: students[found]
            }); 
        } else {
            dispatch({
                type: GET_STUDENT_FAILURE,
                payload: { message : "Student Not Found" }
            });             
        }              
    }

export const addStudent = (student) =>
    async dispatch => {
        // Get max id
        const students = store.getState().list.students;
        const maxId = Math.max(...students.map(student => student.id));
        student.id = (maxId + 1).toString();

        await AddStudent(student)
            .then(async response => {
                dispatch({
                    type: ADD_STUDENT_SUCCESS,
                    payload: student
                });        
                dispatch(getStudents());
            })               
    }