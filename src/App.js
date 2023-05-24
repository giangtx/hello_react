import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Layout from "./components/layout";
import Login from "./pages/login";

import Home from "./pages/home";
import { ROUTER } from "./utils/constants";
import Users from "./pages/users";
import Groups from "./pages/groups";
import Test from "./pages/test";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTER.TEST} component={Test} />
        <Layout>
          <Route path={ROUTER.LOGIN} component={Login} />
          <Route path={ROUTER.HOME} component={Home} />
          <Route path={ROUTER.USERS} component={Users}/>
          <Route path={ROUTER.GROUPS} component={Groups}/>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
