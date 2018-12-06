import React, { Component } from "react";
import { loadReCaptcha } from "react-recaptcha-google";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/Dashboard";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Redirect exact from="" to="login" />
            <Route path="/register/:sponsor" component={Register} />
            <Route path="/register" component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
