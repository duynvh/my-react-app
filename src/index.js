import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/auth";
import { listenSocket } from "./actions/socket";
import socketIOClient from "socket.io-client";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  const socket = socketIOClient("http://52.193.53.226:5000");
  socket.on("message", data => {
    console.log("aaa");
    if (data) {
      console.log(data);
      const newData = JSON.parse(data);
      store.dispatch(listenSocket(newData));
    }
  });

  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/login";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
