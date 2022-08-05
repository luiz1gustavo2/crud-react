import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AuthUser from './AuthUser';

function Register() {
  const navigate = useNavigate();
  const {http} = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  
  const submitForm = () => {
    http.post('api/register', {name: name, email:email, password:password}).then ((res) => {
        navigate('/login');
    })
  }


    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Students 
                                    <Link to={'/students'} className="btn btn-danger btn-sm float-end">Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <form>
                                <div className="form-group mb-3">
                                        <label>Name</label>
                                        <input type="text" name="text" onChange={e => setName(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" onChange={e => setEmail(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={e => setPassword(e.target.value)} className="form-control" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="button" onClick={submitForm} className="btn btn-primary">Register</button>
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

export default Register;