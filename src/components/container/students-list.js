import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { getStudents, deleteStudent } from '../../actions';
import { STUDENTS_LIST_TITLE, PATH_STUDENT_DETAIL, PATH_ADD_STUDENT } from '../../constants';

const StudentsList = () => {
    const students = useSelector(state => state.list.students);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getStudents());
    }, []);    
    
    const deleteHandler = student => {
        if (window.confirm(`Are you sure you wish to delete the student "${student.first_name + ' ' + student.last_name}"?`)) {
            dispatch(deleteStudent(student.id));
        }
    }
    
    return (
        <div>
            <div className="container pl-0 pr-0 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-6 pr-0 pl-0">
                            <h1 className="cc-page-title">{STUDENTS_LIST_TITLE}</h1>
                        </div>
                        <div className="col-6 pr-0 pl-0 cc-link-back-to">
                            <Link to={`/${PATH_ADD_STUDENT}`}>
                                <FontAwesomeIcon icon={faUserPlus} className="cc-icon cc-button" />
                            </Link>                            
                        </div>                        
                    </div>
                </div>
            </div>
            <table className="table table-hover">    
                <thead className="cc-thead">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Street, Number</th>
                        <th scope="col">City</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">GPA</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { students.map( student => (
                        <tr key={student.id}>
                            <td><Link to={`/${PATH_STUDENT_DETAIL}/${student.id}`}>{student.first_name}</Link></td>
                            <td><Link to={`/${PATH_STUDENT_DETAIL}/${student.id}`}>{student.last_name}</Link></td>
                            <td><Link to={`/${PATH_STUDENT_DETAIL}/${student.id}`}>{student.address}</Link></td>
                            <td><Link to={`/${PATH_STUDENT_DETAIL}/${student.id}`}>{student.city}</Link></td>
                            <td><Link to={`/${PATH_STUDENT_DETAIL}/${student.id}`}>{student.phone_number}</Link></td>
                            <td><Link to={`/${PATH_STUDENT_DETAIL}/${student.id}`}>{student.gpa}</Link></td>
                            <td className="text-center">
                                <FontAwesomeIcon icon={faTrash} className="cc-icon cc-button" onClick={() => deleteHandler(student)}/>
                            </td>
                        </tr>
                    ))}            
                </tbody>
            </table>
        </div>
    )
}

export default StudentsList;