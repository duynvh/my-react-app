import React, { Component } from 'react';
import { loadReCaptcha } from 'react-recaptcha-google'
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/Dashboard';

import { Switch, Route, BrowserRouter } from 'react-router-dom'



class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path='/register' exact component={Register} ></Route>
          <Route path='/login' exact component={Login} ></Route>
          <Route path='/dashboard' exact component={Dashboard} ></Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
