import React from "react";
import './Login.css'

const LoginForm = () => {


    return (
        <div className="formcontainer">
            <h2 className="page">Login</h2>
            <br/>
            <input  type="text" placeholder="Username"/>
            <br/>
            <input  type="password" placeholder="Password"/>
            <br/>
            <input  type="password" placeholder="API Key"/>
            <br/>
            <div className="login-btn"><b>Login</b></div>
        </div>
    )
}

export {LoginForm}