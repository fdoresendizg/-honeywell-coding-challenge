import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';

import { ADD_STUDENT_TITLE, PATH_STUDENTS } from '../../constants';
import { addStudent, getStudents } from '../../actions';

const AddStudent = () => {
    const history = useHistory();
    const [ student, setStudent ] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        address: "",
        city: "",
        gpa: ""
    });
    
    const students = useSelector(state => state.list.students);
    const dispatch = useDispatch();

    useEffect(() => {
        // Load all students if students array is empty (this happen when enters directly to this page)
        if (!(students && students.length)) {
            dispatch(getStudents());
        }
    }); 

    const handleChange = e => {
        const value = e.target.value;
        setStudent({
            ...student,
            [e.target.name] : value
        })
    }

    const submit = e => {
        e.preventDefault();
        if (window.confirm(`Are you sure you wish to add the new student "${student.first_name + ' ' + student.last_name}"?`)) {
            dispatch(addStudent(student))
            // Redirects to main page
            history.push(`/${PATH_STUDENTS}`);
        }        
    }

    return (
        <div>
            <div className="container pl-0 pr-0 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-6 pr-0 pl-0">
                            <h1 className="cc-page-title">{ADD_STUDENT_TITLE}</h1>
                        </div>
                        <div className="col-6 pr-0 pl-0 cc-link-back-to">
                            <Link to={`/${PATH_STUDENTS}`}>Back to Students</Link>
                        </div>
                    </div>                                    
                </div>
            </div>
            <div className="container pl-0 pr-0">
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="first_name" value={student.first_name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="last_name" value={student.last_name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" name="address" value={student.address} onChange={handleChange} />
                    </div>        
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" name="city" value={student.city} onChange={handleChange} />
                    </div>        
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" className="form-control" id="phoneNumber" name="phone_number" value={student.phone_number} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gpa">GPA</label>
                        <input type="text" className="form-control" id="gpa" name="gpa" value={student.gpa} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>        
    )
};

export default AddStudent;