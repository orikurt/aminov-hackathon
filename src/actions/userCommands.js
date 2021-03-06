import * as actions from './index';

export const getUser = () => (dispatch, getState, api) => {
    const { user } = getState();
    if ( user.isFetching || user.lastUpdated ){
        return;
    }
    dispatch(actions.fetchUser());
    api.getLogin()
    .then(
        user=>{
            dispatch(actions.setUser(user))
            dispatch(actions.fetchUserSuccess())},
        error=>
            dispatch(actions.fetchUserError(error)));
}

export const register = (userForm) => (dispatch, _getState, api) => {
    dispatch(actions.postRegistration(userForm));
    api.register(userForm)
    .then(
        user=>{ 
            dispatch(actions.setUser(user)); 
            dispatch(actions.registrationSuccess(user)) }, 
        error=>
            dispatch(actions.registrationError(error))
    );
}

export const login = (userForm) => (dispatch, _getState, api) => {
    dispatch(actions.postLogin(userForm));
    api.postLogin(userForm)
    .then(
        user=>{ 
            dispatch(actions.setUser(user)); 
            dispatch(actions.loginSuccess(user)) }, 
        error=>
            dispatch(actions.loginError(error))
    );
}

export const logout = () => (dispatch, _getState, api) => {
    dispatch(actions.postLogout());
    api.postLogout()
    .then(
        ()=>{ 
            dispatch(actions.logoutSuccess()) }, 
        error=>
            dispatch(actions.logoutError(error))        
    )
}

export const sendForgotPassword = (userForm) => (dispatch, _getState, api) => {
    dispatch(actions.postForgotPassword(userForm));
    api.postForgotPassword(userForm)
    .then(
        _res=>{ 
            dispatch(actions.forgotPasswordSuccess(userForm)) }, 
        _error=>
            dispatch(actions.forgotPasswordError(userForm))
    );
}