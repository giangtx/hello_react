import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { ROUTER } from "../../utils/constants";
import _ from 'lodash';
import { useTranslation } from "react-i18next";

const Navbar = () => {

  const history = useHistory();
  const { t } = useTranslation();

  const getActive = (routerNames = []) => {
    return _.includes(routerNames, history.location.pathname) ? 'active' : '';
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
         <Link to={ROUTER.HOME} className='logo'>{t('app.app_name')}</Link>
      </div>
      <div className="navbar-container">
        <Link to={ROUTER.USERS} className={`nav-item ${getActive([ROUTER.USERS])}`}>
          {t('navbar.user')}
        </Link>
        <Link to={ROUTER.GROUPS} className={`nav-item ${getActive([ROUTER.GROUPS])}`}>
        {t('navbar.group')}
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