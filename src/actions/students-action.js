import { GetStudents, DeleteStudent } from '../services/student-service';
import { LIST_SUCCESS, LIST_FAILURE, DELETE_STUDENT_SUCCESS } from './index';

export const getStudents = () =>
    async dispatch => {
        await GetStudents()
        .then(response => {
            dispatch({
                type: LIST_SUCCESS,
                payload: response
            });                
        })
        .catch(error => {        
            dispatch({
                type: LIST_FAILURE,
                payload: error
            });
        })
    }

export const deleteStudent = (studentId) =>
    async dispatch => {
        await DeleteStudent(studentId)
        .then(async response => {
            dispatch({ type: DELETE_STUDENT_SUCCESS });
            dispatch(getStudents());
        })               
    }