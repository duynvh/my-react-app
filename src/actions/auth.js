import * as types from '../constants/ActionTypes';
import * as configs from '../constants/Config';
import axios from 'axios';

// Register User
export const registerUser = (user, history) => dispatch => {
    console.log('dad')
    axios
        .post(configs.URL_API + 'register', user)
        .then(res => {
            console.log(res)
           
            if (res.data.code !== 1) 
            {
                dispatch(fail(types.REGISTER_FAIL, res.data.msg))
            }
            else 
            {
                dispatch(success(types.REGISTER_SUCCESS, res.data.msg))
                history.push('/login');
            }
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: types.GET_ERRORS,
                payload: err.error
            })
        })
}

// Login - Get User Token
export const loginUser = (user, history) => dispatch => {
    axios
        .post(configs.URL_API + 'login', user)
        .then(res => {
            if(res.data.code === 6) {
                history.push('/dashboard');
            }
            else {
                console.log(res.data);
                history.push('/register');
                // // Save to localStorage
                // const { token } = res.data;

                // // Set token to localStorage
                // localStorage.setItem('jwtToken', token);

                // // Set token to Auth header
                // setAuthToken(token);

                // // Decode token to get user data
                // const decoded = jwt_decode(token); 

                // // Set current user
                // dispatch(setCurrentUser(decoded))
            }
        })
        .catch(err => {
            console.log(err);
            // dispatch({
            //     type: types.GET_ERRORS,
            //     payload: err.response.data
            // })
        })
} 

export const fail = (type, message) => {
    return {
        type: type,
        payload: {
            message: message
        }
    }
}
  
export const success = (type, message) => {
    return {
        type: type,
        payload: {
            status: true,
            message: message
        }
    }
}
