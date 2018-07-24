import React from 'react';
import { percentFormat, numberFormat } from '../utils/format';
import { colors } from '../utils/uiScheme';

const TrendData = (props) => {
    return (
        <div>
            <Line name="Change" value={ props.trend.change } format={ percentFormat } >%</Line>
            <Line name="High" value={ props.trend.high } format={ numberFormat } >$</Line>
            <Line name="Low" value={ props.trend.low } format={ numberFormat } >$</Line>
            <Line name="Trades" value={ props.trend.trades } format={ numberFormat }/>
            <Line name="Volume" value={ props.trend.volume } format={ numberFormat } style={{ borderBottom: 'none' }} />
        </div>
    )
}

const Line = (props) => (
    <div style={{ ...lineStyle, ...props.style }}>
        <span style={{ fontSize: '12px', color: colors.textLowlight }}>{ props.name } </span>
        <label style={{ fontSize: '14px' }}>{ props.format(props.value) }{ props.children }</label>
    </div>
)

const lineStyle = { 
    display: 'flex', 
    justifyContent: 'space-around', 
    width: '150px',
    alignItems: 'center',
    height: '40px',
    borderBottom: `1px solid ${ colors.darkGray }`
}

export default TrendData;