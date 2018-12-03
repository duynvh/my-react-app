import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/auth';

// Check for token
if(localStorage.jwtToken) {
    // Set auth token header
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info
    const decoded = jwt_decode(localStorage.jwtToken);
  
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000;
    
    if(decoded.exp < currentTime) {
      // Logout User
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = '/login';
    }
  }

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
, document.getElementById('root'));