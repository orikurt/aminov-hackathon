import * as actions from './index';

export const getUser = () => (dispatch, getState, api) => {
    const { user } = getState();
    if ( user.isFetching || user.lastUpdated ){
        return;
    }
    dispatch(actions.fetchUser());
    api.getLogin()
    .then(user=>dispatch(actions.setUser(user)), error=>dispatch(actions.fetchUserError(error)));
}

export const register = (userForm) => (dispatch, _getState, api) => {
    dispatch(actions.postRegistration(userForm));
    api.register(userForm)
    .then(
        user=>{ 
            dispatch(actions.setUser(user)); 
            dispatch(actions.registrationSuccess(user)) }, 
        error=>
            dispatch(actions.registrationEroor(error))
    );
}