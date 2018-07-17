import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';

const tooltip = (props) => {
    const internal_tooltip = (<Tooltip id={props.id || props.value}>{props.value}</Tooltip>);
    return ( <OverlayTrigger 
            overlay={internal_tooltip}
            placement={props.placement}>
            {props.children}
        </OverlayTrigger>);
}

export default tooltip;