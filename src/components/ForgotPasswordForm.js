import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { FormControl, ControlLabel, Button } from 'react-bootstrap';
import { sendForgotPassword } from '../actions/userCommands';

class LoginForm extends React.Component {
  
    state = {
        email: '',
    };
    
    handleChange = (e) => {
        this.setState({email: e.target.value});
    }

    submit = (e) => {
        e.preventDefault();
        this.props.sendForgotPassword(this.state);
    }
  
    render() {
      return (
        <form style={ this.props.style }>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              value={this.state.user}
              placeholder="Email..."
              style={ controlStyle }
              onChange={(e)=>this.handleChange(e, 'user')}
            />
            <FormControl.Feedback />
            <Button 
                type="submit" 
                bsStyle="success"
                onClick={ this.submit }
                disabled={ this.props.user.isFetching || !this.state.email } >Submit
            </Button>
            <div style={{ float: 'right' }}>
                <Link to="/login">login</Link>
                <span> / </span>
                <Link to="/register">register</Link>
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
    return bindActionCreators({ sendForgotPassword }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
  