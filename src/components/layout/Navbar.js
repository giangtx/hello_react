import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { ROUTER } from "../../utils/constants";
import _ from 'lodash';

const Navbar = () => {

  const history = useHistory();

  const getActive = (routerNames = []) => {
    return _.includes(routerNames, history.location.pathname) ? 'active' : '';
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
         <Link to={ROUTER.HOME} className='logo'>Slytherin</Link>
      </div>
      <div className="navbar-container">
        <Link to={ROUTER.USERS} className={`nav-item ${getActive([ROUTER.HUSERSOME])}`}>
          Người dùng
        </Link>
        <Link to={ROUTER.GROUPS} className={`nav-item ${getActive([ROUTER.GROUPS])}`}>
          Nhoms
        </Link>
        <Link  to={ROUTER.TEST} className={`nav-item ${getActive([ROUTER.TEST])}`}>
          Test
        </Link>
      </div>
      <div className="nav-item nav-logout">
          Đăng xuất
        </div>
    </div>
  )
}
export default Navbar;