import React from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { colors } from '../utils/uiScheme';

const tooltipStyle = {}

const tooltip = (props) => {
    const internal_tooltip = (
        <Tooltip 
            id={props.id || props.value}
            style={tooltipStyle} >
            {props.value}
        </Tooltip>);
    return ( <OverlayTrigger 
            overlay={internal_tooltip}
            placement={props.placement}
            style={tooltipStyle} >
            {props.children}
        </OverlayTrigger>);
}

export default tooltip;