import { getStudents, deleteStudent } from './students-action';
import { getStudentById, addStudent } from './student-action';

// Student List
export const LIST_SUCCESS = "LIST_SUCCESS";
export const LIST_FAILURE = "LIST_FAILURE";
export const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";

// Student Details
export const GET_STUDENT_SUCCESS = "GET_STUDENT_SUCCESS";
export const GET_STUDENT_FAILURE = "GET_STUDENT_FAILURE";
export const CLEAR_STUDENT_FAILURE = "CLEAR_STUDENT_FAILURE";

// Add Student
export const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS";

export {
    getStudents,
    deleteStudent,
    getStudentById,
    addStudent,
};