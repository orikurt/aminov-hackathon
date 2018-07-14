import * as actions from '../actions/actionNames';
import { toast } from 'react-toastify';

const initialState = {
    isFetching: false,
    lastUpdated: null,
    signedIn: null,
    signedOut: null,
    shouldRedirect: false,
    data: {}
}

export default function users(state=initialState, action){
    switch(action.type){
        case actions.FETCH_USER:
        case actions.POST_REGISTRATION:
        case actions.POST_LOGIN:
        case actions.POST_FORGOT_PASSWORD:
            return { ...state, isFetching: true }
        
        case actions.FETCH_USER_ERROR:
            return { ...state, isFetching: false };
        
        case actions.REGISTER_ERROR:
        case actions.LOGIN_ERROR:
            toast.error(action.payload.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 4000
            });
            return { ...state, isFetching: false };

        case actions.SET_USER:
            return { ...state, data: action.payload, lastUpdated: Date.now() };
        
        case actions.LOGOUT_SUCCESS:
            return { ...state, data: {}, signedOut: Date.now(), signedIn: null, isFetching: false};

        case actions.FETCH_USER_SUCCESS:
            return { ...state, signedIn: Date.now(), isFetching: false };

        case actions.REGISTER_SUCCESS:
        case actions.LOGIN_SUCCESS:
            return { ...state, signedIn: Date.now(), isFetching: false, shouldRedirect: true };

        case actions.FORGOT_PASSWORD_SUCCESS:
        case actions.FORGOT_PASSWORD_ERROR:
            toast.success(`A reset password link has been sent to ${action.payload.email}`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 4000
            });
            return { ...state, isFetching: false }

        case actions.SIGNIN_REDIRECT:
            return { ...state, shouldRedirect: false };
            
        default:
            return state;
    }
}