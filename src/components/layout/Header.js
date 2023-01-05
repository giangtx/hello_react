import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";

const Header = () => {

  const history = useHistory();

  const getActive = (routerNames = []) => {
    return routerNames.includes(history.location.pathname) ? 'header-active' : '';
  };

  return(
    <div className="header">
      <Link to={ROUTER.HOME} className={`header-item ${getActive([ROUTER.HOME, ROUTER.TEST])}`}>home</Link>
      <Link to={ROUTER.LOGIN} className={`header-item ${getActive([ROUTER.LOGIN])}`}>login</Link>
    </div>
  )
}

export default Header;