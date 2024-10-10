'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

export default function App() {
    let [name, setName] = useState('');
    let [pass, setPass] = useState('');

    const handlesubmit = (event) => {
        event.preventDefault();
        if (!name.length || !pass.length)
        {
            alert("Please fill the form")
        }
        else{
        alert(`Form Submitted Successfully Username: ${name}  Password: ${password}`);
        }
    }
    return (
        <>
            <h1 className='d-flex justify-content-center'>Forms in HTML</h1>
            <br /><br />
            <div className='d-flex justify-content-center'>
                <form onSubmit={handlesubmit} className="p-3">
                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-4 col-form-label">
                            Enter Name:
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="password" className="col-sm-4 col-form-label">
                            Enter Password:
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}