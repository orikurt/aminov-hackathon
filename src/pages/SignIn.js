import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import Banner from '../components/Banner';

const headerStyle = {
    textAlign: 'center',
    margin: 0
}

const formStyle = {
    maxWidth: '500px',
    margin: '0 auto'
}

 class SignIn extends Component {
     render(){
        if (this.props.user.signedIn) {
            return ( <Redirect to="/"/> )
        }
        return (
            <div>
                <Banner />
                <Switch>
                    <Route path="" render={()=>(
                        <div>
                            <h3 style={ headerStyle }>Sign In</h3>
                            <LoginForm style={ formStyle }/>
                        </div>
                    )} />                    
                    <Route path="" render={()=>(
                        <div>
                            <h3 style={ headerStyle }>Register</h3>
                            <RegistrationForm style={ formStyle }/>
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

export default connect(mapStateToProps)(SignIn);