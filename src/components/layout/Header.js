import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import _ from 'lodash';

const Header = () => {

  const history = useHistory();

  const isRouter = (routerNames = []) => {
    return _.includes(routerNames, history.location.pathname);
  }

  const getActive = (routerNames = []) => {
    return _.includes(routerNames, history.location.pathname) ? 'header-active' : '';
  };

  const getContent = () => {
    if (isRouter([ROUTER.LOGIN])) {
      return (<div className="header-tiny" />)
    } else {
      return (
        (<div className="header-tiny header-light" />)
      )
    }
  }

  return getContent()
}

export default Header;