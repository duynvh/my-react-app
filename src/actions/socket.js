import * as types from "../constants/ActionTypes";
import * as configs from "../constants/Config";

// Register User
export const listenSocket = data => dispatch => {
  dispatch({
    type: types.LISTEN_SOCKET,
    payload: data
  });
};
