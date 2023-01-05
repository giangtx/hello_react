import React, { useEffect, useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    

    const handleLogin = () => {
        setMessage('');
        if (!username || !password) {
            setMessage('fail');
            return;
        }
        setMessage('success');
    }

    return (
        <div className="login-page">
            <div>
                <p>{message}</p>
                <div>login</div>
                <div className="input-form">
                    <div className="label">username</div>
                    <input 
                      value={username}
                      className="input-text"
                      type='text'
                      onChange={(e) => {setUsername(e.target.value)}}
                    />
                </div>
                <div className="input-form">
                    <div className="label">password</div>
                    <input
                      value={password}
                      className="input-text"
                      type='password'
                      onChange={(e) => {setPassword(e.target.value)}}
                    />
                </div>
                <button className="btn" onClick={() => {handleLogin()}}>login</button>
            </div>
           
        </div>
    )
}

export default Login;