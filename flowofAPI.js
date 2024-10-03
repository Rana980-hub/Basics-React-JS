'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Get from './Basics/get'
import { useState } from 'react';

export default function flow()
{
    let [result, setResult] = useState([]);   //constructer, used to render data
    let [error, SetError] = useState(false)    
    const first = async () => {
        try{
    let data = await Get('users');
    setResult(data);
    } catch(error)
    {
    SetError(true);
    }}
    if (error == true)
        return(
    <div>
        <h1>Something Wrong</h1>
    </div>)
    else
    return(
        <div>
            <h1>API DATA:</h1>
            <hr/>
            <button onClick={first}>Click Here</button>
            {result.map(item => (
                <div key = {item.id}>
                    <div className='Container d-flex'>
                    <h1>NAME:</h1>
                    <h1 style={{color: item.name.includes("a") ? "Red" : "green", marginLeft:"18px"}}>{item.name}</h1>
                    </div>
                <h1><a href="#">EMAIL: {item.email}</a></h1>
                </div>
            ))}
        </div>
    )
} 