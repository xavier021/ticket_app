import React from "react";
import LoginForm from "../Components/Login/LoginForm"
import IsAuth from "../Hooks/IsAuth";

export default function Login(){
    IsAuth();
    return(
        <div>
            <LoginForm />
        </div>
    )
}