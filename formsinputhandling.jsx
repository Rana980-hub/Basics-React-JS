'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

export default function App() {
   let [inputs,setInputs] = useState({
    username : "",
    password: ""
   }) 

    
   const handlechange = (event)=> {
          const name = event.target.name;    //username,password etc
          const pass = event.target.value;   //inki input values jo user enter karay ga

          setInputs({...inputs, [name]: pass});   
   }
   const handlesubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        alert(inputs);
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
                                name="username"
                                placeholder="Enter Your Name"
                                value={inputs.username} //ye input username kay liye hy
                                onChange={handlechange}   //event "onChange" kay ander hota hy react me, funtion kay ander as parameter bhi day sktay hy
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
                                name ="password"
                                placeholder="Enter Your Password"
                                value={inputs.password}   //ye input password kay liye hy
                                onChange={handlechange}   //event "onChange" kay ander hota hy react me, funtion kay ander as parameter bhi day sktay hy
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
