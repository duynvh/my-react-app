import * as types from "../constants/ActionTypes";
// import isEmpty from "../validation/is-empty";
const initialState = {
  socket: []
};

const socket = (state = initialState, action) => {
  switch (action.type) {
    case types.LISTEN_SOCKET:
      console.log(action.payload);
      return {
        ...state,
        socket: [...state.socket, action.payload]
      };

    default:
      return state;
  }
};

export default socket;
