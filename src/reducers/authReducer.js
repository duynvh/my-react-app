import * as types from '../constants/ActionTypes';
import isEmpty from '../validation/is-empty';
const initialState = {
    error: '',
    success: '',
    isAuthenticated: false,
    user: {}
};

const auth = (state = initialState, action) => {
    switch(action.type) {
        case types.REGISTER_FAIL: 
        console.log(action.payload)
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
        case types.SET_CURRENT_USER: 
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;    
        
    }
}

export default auth;
