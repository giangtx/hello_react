import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="common-page login-page">
      <div className="page-container">
        <div className="page-content">
          <div className="logo-title">Slytherin</div>
          <div className="sub-title">Đăng nhập</div>
          <div className="input-container">
            <div className="label-input">Tài khoản</div>
            <input 
              value={username}
              className={`input-form input-text ${username ? 'active-input' : ''}`}
              type='text'
              onChange={(e) => {setUsername(e.target.value)}}
            />
          </div>
          <div className="input-container">
            <div className="label-input">Mật khẩu</div>
            <input
              value={password}
              className={`input-form input-text ${password ? 'active-input' : ''}`}
              type='password'
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </div>
          <button className={`btn-login ${username && password ? 'btn-active': ''}`} onClick={() => {handleLogin()}}>Đăng nhập</button>
          <div className="forgot-pass">
            <Link to=''>Quên mật khẩu?</Link>
          </div>

          
        </div>
      </div>
        
    </div>
  )
}

export default Login;