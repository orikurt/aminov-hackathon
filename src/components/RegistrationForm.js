import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import { register } from '../actions/userCommands';

class RegistrationForm extends React.Component {
  
    state = {
        username: '',
        email: '',
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
        if (key === "email") {
            newState.username = e.target.value.split("@")[0];
        }
        this.setState(newState);
    }

    submit = (e) => {
        e.preventDefault();
        this.props.register(this.state);
    }
  
    render() {
      return (
        <form style={this.props.style}>
            <ControlLabel style={ controlStyle }>Enter your Email</ControlLabel>
            <FormControl
              type="email"
              value={this.state.email}
              autoComplete='email'
              placeholder="Email..."
              onChange={(e)=>this.handleChange(e, 'email')}
            />
            <FormGroup
                controlId="registrationForm"
                validationState={this.getValidationState()}
            >
                <ControlLabel style={ controlStyle }>Select Password</ControlLabel>
                <FormControl.Feedback style={{ top: '40px' }} />
                <FormControl
                type="password"
                value={this.state.password}
                autoComplete='new-password'
                placeholder="Password..."
                onChange={(e)=>this.handleChange(e, 'password')}
                />                        
                <HelpBlock>Password should be at least 6-10 characters.</HelpBlock>
            </FormGroup>
            <ControlLabel style={ controlStyle }>Select Username (optional)</ControlLabel>
            <FormControl
              type="text"
              value={this.state.username}
              style={{ marginBottom: '20px' }}
              placeholder="Username..."
              onChange={(e)=>this.handleChange(e, 'username')}
            />            
            <Button 
                type="submit" 
                bsStyle="success"
                onClick={ this.submit }
                disabled={ this.props.user.isFetching } >
                Register
            </Button>
            <div style={{ float: 'right' }} >
                <span>already have an account? </span>
                <Link to="/login">login</Link>
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
    return bindActionCreators({ register }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
  