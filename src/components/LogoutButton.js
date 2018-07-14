import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/userCommands';

const logoutButton = (props) => {
    return (<div style={buttonStyle} onClick={props.logout}>
        <Glyphicon glyph="off" />
    </div>)
}

const buttonStyle = {
    cursor: 'pointer',
}

const mapStateToProps = (state) => {
    return { user: state.user };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(logoutButton);