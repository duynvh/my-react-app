import React, { Component } from 'react';
import { loadReCaptcha } from 'react-recaptcha-google'
import Login from './components/login/Login';
import Register from './components/register/Register';

class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
