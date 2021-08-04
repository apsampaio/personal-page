import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { About } from "./pages/About";

const Routes: React.FC = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </Router>
  );
};

export { Routes };
