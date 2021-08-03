import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { About } from "./pages/About";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </Router>
  );
};

export { Routes };
