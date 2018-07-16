import React from 'react';
import { percentFormat } from './format';
import { Glyphicon } from 'react-bootstrap';
import { colors } from './uiScheme';

const textStyle = {
    textAlign: 'center',
    margin: '0 auto'
}

const decoratorStyle = {
    alignItems: 'center',
    display: 'flex'
}

export const TextCell = props => (<div style={ textStyle } >{props.value}</div>);

export const PercentCell = props => (<div style={ textStyle } >{ percentFormat(props.value) }%</div>);

export const StockCell = (props)=>(<DecoratedCell {...props}> <PercentCell {...props} /> </DecoratedCell>)

export const DecoratedCell = props => {
    return(
    <div style={{...decoratorStyle, ...props.style}} >
        { props.value >= ( props.threshold || 0 ) ? 
            <Glyphicon glyph={ props.iconUp || "arrow-up" } style={{ color: (props.colorUp || colors.green), padding: '5px' }} />
            : <Glyphicon glyph={ props.iconDown || "arrow-down" } style={{ color: (props.colorDown || colors.red), padding: '5px' }} /> }
        { props.children }
    </div>)};

