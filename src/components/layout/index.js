import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { useHistory, useParams } from "react-router-dom";
import _ from 'lodash';
import { ROUTER } from "../../utils/constants";
import Modals from "../modal";

const Layout = ({ children }) => {

  const history = useHistory();
  
  const isRouter = (routerNames = []) => {
    return _.includes(routerNames, history.location.pathname);
  }

  const getNavbar = () => {
    if (!isRouter([ROUTER.LOGIN])) {
      return (<Navbar />)
    } else {
      return '';
    }
  }

  return (
    <div>
      <Header />
      {getNavbar()}
      <div className={`page-body-wrapper ${!isRouter([ROUTER.LOGIN]) ? 'page-body-with-nav' : ''}`}>
        {children}
      </div>
      <Modals />
    </div>
  )
}

export default Layout;