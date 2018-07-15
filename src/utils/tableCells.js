import React from 'react';
import { percentFormat } from './format';
const textStyle = {
    textAlign: 'center',
    margin: '0 auto'
}

export const TextCell = props => (<div style={{...textStyle, ...props.style}} >{props.value}</div>);

export const PercentCell = props => (<div style={{...textStyle, ...props.style}} >{ percentFormat(props.value) }%</div>)
