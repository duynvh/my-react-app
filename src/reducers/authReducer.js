import * as types from '../constants/ActionTypes';
const initialState = {
    error: '',
    success: ''
};

const auth = (state = initialState, action) => {
    switch(action.type) {
        case types.REGISTER_FAIL: 
            return {
                ...state,
                error: action.payload.message
            };
        case types.REGISTER_SUCCESS: 
            return {
                ...state,
                success: action.payload.message
            };
        
        case types.LOGIN_FAIL: 
            return {
                ...state,
                error: action.payload.message
            };
        default:
            return state;    
        
    }
}

export default auth;
