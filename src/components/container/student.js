import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { STUDENT_TITLE, PATH_STUDENTS } from '../../constants';
import { getStudentById, getStudents, CLEAR_STUDENT_FAILURE } from '../../actions';
import ImagePlaceHolder from '../../placeholder-student-image.png';

const Student = props => {
    const history = useHistory();
    const [ student, setStudent ] = useState({});
    const details = useSelector(state => state.student.details);
    const error = useSelector(state => state.student.error);
    const students = useSelector(state => state.list.students);
    const { match : {params}  } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        //load all students if students array is empty (this happen when enters directly to this page)
        if (students && students.length) {
            dispatch(getStudentById(params.id));
        } else {
            dispatch(getStudents())
        }
    }, [students]);

    useEffect(() => {
        setStudent(details);
    }, [details]);

    useEffect(()=> {      
        // If studentId doesn't exists then throws an error, hence redirects to students list page  
        if (error && !(Object.keys(error).length === 0)) {
            dispatch({ type : CLEAR_STUDENT_FAILURE });
            history.push(`/${PATH_STUDENTS}`);
        }
    }, [error]);
        
    return (
        <div>
            <div className="container pl-0 pr-0 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-6 pr-0 pl-0">
                            <h1 className="cc-page-title">{STUDENT_TITLE}</h1>
                        </div>
                        <div className="col-6 pr-0 pl-0 cc-link-back-to">
                            <Link to={`/${PATH_STUDENTS}`}>Back to Students</Link>
                        </div>
                    </div>                                    
                </div>
            </div>
            <div className="container pl-0 pr-0">
                <div className="row">
                    <div className="col-4 mt-4">
                        <img src={ImagePlaceHolder} className="cc-picture-placeholder rounded-circle"/>
                    </div>
                    <div className="col-8">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" value={student.first_name || ''} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" value={student.last_name || ''} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address"  value={student.address || ''} readOnly/>
                        </div>        
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" value={student.city || ''} readOnly/>
                        </div>        
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber" value={student.phone_number || ''} readOnly/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gpa">GPA</label>
                            <input type="text" className="form-control" id="gpa" value={student.gpa || ''} readOnly/>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Student;