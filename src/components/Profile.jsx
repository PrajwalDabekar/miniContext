import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile(){

    const {user} = useContext(UserContext)
    
    if(!user){
        return <div>Please Login</div>
    }
    else{
        return (
        <>    
        <div>Hello {user.username}</div>
        <div>Your Password is {user.password}</div>
        </>
        )
    }
    
}

export default Profile