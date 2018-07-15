import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { FormControl, ControlLabel, Button } from 'react-bootstrap';
import { login } from '../actions/userCommands';
import SignUpButton from './SignUpButton';

class LoginForm extends React.Component {
  
    state = {
        user: '',
        password: '',
    };
  
    getValidationState = () => {
      const length = this.state.password.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange = (e, key) => {
        let newState = {};
        newState[key] = e.target.value;
        this.setState(newState);
    }

    submit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
    }
  
    render() {
      return (
        <form style={ this.props.style }>
            <ControlLabel>Email / Username</ControlLabel>
            <FormControl
              type="text"
              value={this.state.user}
              placeholder="Email / Username..."
              autoComplete="username"
              style={ controlStyle }
              onChange={(e)=>this.handleChange(e, 'user')}
            />
            <ControlLabel>Password</ControlLabel>
            <FormControl
            type="password"
            style={ controlStyle }
            value={this.state.password}
            autoComplete='current-password'
            placeholder="Password..."
            onChange={(e)=>this.handleChange(e, 'password')}
            />                        
            <FormControl.Feedback />
            <Button 
                type="submit" 
                bsStyle="success"
                onClick={ this.submit }
                disabled={ this.props.user.isFetching } >Login
            </Button>
            <div style={{ float: 'right' }}>
                <Link to="/forgotpassword">Forgot password?</Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '15px'}}>
                <ControlLabel>Don't have an account? </ControlLabel>
                <SignUpButton />
            </div>
        </form>
      );
    }
}

const controlStyle = {
    margin: '10px 0'
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
  