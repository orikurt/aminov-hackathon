import React from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function() {
    return (
    <Link to="/register">
        <Button bsStyle="info">
            <span>Sign Up   </span>
            <Glyphicon glyph="user" />
        </Button>
    </Link>)
}
