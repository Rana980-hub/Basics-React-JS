"use client"

import { useEffect } from "react"

export default function Callapi()
{
    //UseEffect - gives Data when Page loaded (Take an Arrow Function and Array)
    useEffect(()=> {
     load();
    }, []);
    //the async keyword automatically makes the function return a promise.
    const load = async () => {
        let save = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await save.json()  //without await it returns promises
        //gives data in JSON format
        console.log(data)            //give API data in JSON Format
    }
    const Clicktohandle = () => {
        load();
    }

    return(
        <div>
            <h1>Fetching API</h1>
            <button onClick={Clicktohandle}>Click to Fetch</button>
        </div>
    )
}
