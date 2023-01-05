import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Layout from "./components/layout";
import Login from "./pages/login";

import Home from "./pages/home";
import { ROUTER } from "./utils/constants";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path={ROUTER.LOGIN} component={Login} />
          <Route path={ROUTER.HOME} component={Home} />
          <Route path={ROUTER.TEST} component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
