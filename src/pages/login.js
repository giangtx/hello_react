import React, { useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import authService from '../service/auth';
import { setToken } from "../utils/cookies";
import {ShowModalLoading,HideModalLoading} from "../store/modal/modal.action";
import {useDispatch} from "react-redux";



const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async() => {
    setMessage('');
    if (!username || !password) {
      setMessage('fail');
      return;
    }
    setMessage('success');

    dispatch(ShowModalLoading());
    const res = await authService.login(username,password);
    if(res.status===200){
      setToken(res.data.token);
      history.push('/');
    }
    else if(res.status===404){
      setMessage("User not found")
    }
    else{
      setMessage(res.msg);
    }
    dispatch(HideModalLoading());
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