import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
