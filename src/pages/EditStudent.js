import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditStudent(props) {
    const navigate = useNavigate();
    const [studentInput, setStudent] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`/api/edit-student/${id}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Authorization",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
            }
        }).then((res) => {
            if (res.data.status === 200) {
                setStudent(res.data.student);
                console.log(res.data.student);
            } else if(res.data.status === 404)
            {
                navigate.push('/students');
            }
            console.log("dentro do fetch dps do setinput");
        })
        console.log("dentro do useeffect dps do fetch");
    }, [navigate])

    

    const handleChange = (e) => {
        e.persist();
        setStudent(({ ...studentInput, [e.target.name]: e.target.value }))
        console.log("final do handle change");
    }

    const submitForm = (e) => {
        e.preventDefault();
        const data = {
            name: studentInput.name,
            course: studentInput.course,
            email: studentInput.email,
            phone: studentInput.phone,
        }

            axios.put(`/api/update-student/${id}`, data).then((res) => {
                if (res.data.status === 200) {
                    navigate('/students');
                }
            })
    } 
    


    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Students
                                    <Link to={'/students'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                                <form>
                                    <div className="form-group mb-3">
                                        <label>Student Name</label>
                                        <input type="text" name="name" onChange={handleChange} value={studentInput.name || ''} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Course</label>
                                        <input type="text" name="course" onChange={handleChange} value={studentInput.course || ''} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Email</label>
                                        <input type="text" name="email" onChange={handleChange} value={studentInput.email || ''} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Phone</label>
                                        <input type="text" name="phone" onChange={handleChange} value={studentInput.phone || ''} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" onClick={submitForm} className="btn btn-primary">Update Student</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditStudent;