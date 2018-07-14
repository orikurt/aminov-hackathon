import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import Banner from '../components/Banner';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import { signInRedirect } from '../actions';

const headerStyle = {
    textAlign: 'center',
    margin: 0
}

const formStyle = {
    maxWidth: '500px',
    margin: '0 auto'
}

 class SignIn extends Component {
     componentWillUnmount(){
        if ( this.props.user.shouldRedirect ) {
            this.props.signInRedirect();
        }
     }

     render(){
        if ( this.props.user.shouldRedirect ) {
            return ( <Redirect to="/"/> )
        }
        return (
            <div>
                <Banner />
                <Switch>
                    <Route path="/login" render={()=>(
                        <div>

                            <h3 style={ headerStyle }>Log In</h3>
                            <LoginForm style={ formStyle }/>
                        </div>
                    )} />                    
                    <Route path="/register" render={()=>(
                        <div>
                            <h3 style={ headerStyle }>Register</h3>
                            <RegistrationForm style={ formStyle }/>
                        </div>
                    )} />
                    <Route path="/forgotpassword" render={()=>(
                        <div>
                            <h3 style={ headerStyle }>Reset Password</h3>
                            <ForgotPasswordForm style={ formStyle }/>
                        </div>
                    )} />                                        
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signInRedirect
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);