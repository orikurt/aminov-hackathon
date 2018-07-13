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
        this.setState(newState);
    }

    submit = (e) => {
        e.preventDefault();
        this.props.register(this.state);
    }
  
    render() {
      return (
        <form style={this.props.style}>
            <ControlLabel>Select Username</ControlLabel>
            <FormControl
              type="text"
              value={this.state.username}
              placeholder="Username..."
              style={ controlStyle }
              onChange={(e)=>this.handleChange(e, 'username')}
            />
            <ControlLabel>Enter your Email</ControlLabel>
            <FormControl
              type="email"
              style={ controlStyle }
              value={this.state.email}
              autoComplete='email'
              placeholder="Email..."
              onChange={(e)=>this.handleChange(e, 'email')}
            />
            <FormGroup
                controlId="registrationForm"
                validationState={this.getValidationState()}
            >
                <ControlLabel>Select Password</ControlLabel>
                <FormControl
                type="password"
                style={ controlStyle }
                value={this.state.password}
                autoComplete='new-password'
                placeholder="Password..."
                onChange={(e)=>this.handleChange(e, 'password')}
                />                        
                <FormControl.Feedback />
                <HelpBlock>Password should be at least 6 characters.</HelpBlock>
            </FormGroup>
            <Button 
                type="submit" 
                bsStyle="success"
                onClick={ this.submit } >
                Register
            </Button>
            <Link to="/login" style={{ float: 'right' }}>login</Link>
        </form>
      );
    }
}

const controlStyle = {
    margin: '10px 0'
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ register }, dispatch);
}

export default connect(()=>({}), mapDispatchToProps)(RegistrationForm);
  