import React from 'react';

const textStyle = {
    textAlign: 'center',
    margin: '0 auto'
}

export const TextCell = props => (<div style={textStyle} >{props.value}</div>);

export const PercentCell = props => (<div style={textStyle} >{ Math.floor( parseFloat(props.value) * 1000 ) / 10 }%</div>)
