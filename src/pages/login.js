import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from '../service/auth';
import { setToken } from "../utils/cookies";
import { validateEmail } from "../utils/validate";
import { showModalLoading, hideModalLoading } from "../store/modal/modal.action";
import { useDispatch } from "react-redux";

const Login = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async() => {
    setMessage('');
    if (!username || !password) {
      setMessage('vui lòng nhập đầy đủ thông tin');
      return;
    }
    // kiến thức ngoài lề về regex nếu muốn tìm hiểu
    // if (!validateEmail(username)) {
    //   setMessage('vui lòng nhập đúng format mail');
    //   return;
    // }
    dispatch(showModalLoading());
    const res = await authService.login(username, password);
    if (res.status === 200) {
      setToken(res.data.token);
      history.push('/');
    } else if (res.status === 404) {
      setMessage('Người dùng không tồn tại');
    } else {
      setMessage(res.msg);
    }
    setTimeout(() => {
      dispatch(hideModalLoading());
    }, "1000")
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
          <button
            className={`btn-login ${username && password ? 'btn-active': ''}`}
            onClick={() => {handleLogin()}}
          >Đăng nhập</button>
          <div className="forgot-pass">
            <Link to=''>Quên mật khẩu?</Link>
          </div>
          <p>{message}</p>
        </div>
      </div>
        
    </div>
  )
}

export default Login;