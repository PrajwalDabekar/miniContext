import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login(){

    const [username , setUsername] = useState()
    const [password , setPassword] = useState()

    const {setUser} = useContext(UserContext)
    

    const handleClick = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
     
    return(
        <div>
            <h2>Login</h2>
            <input 
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="Enter UserName"
            />
            <br/>
            <input
            type="text"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Enter Password"
            />
            <br/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Login