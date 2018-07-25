import React from 'react';
import { numberFormat, percentFormat } from '../utils/format';
import { colors } from '../utils/uiScheme';

const holdingCard = (props) => {
    return (
        <div style={playerCardStyle}>
            <img src={`/${props.player.image_url}`} alt={props.player.name} style={imageStyle} />
            <div style={ infoStyle }>
                <label style={{fontSize: '16px'}}>
                    { props.player.name }
                    { props.stock ? <span style={{ color: colors.textLowlight }}> {props.stock.symbol} </span> : null }
                </label>
                <InfoLine name="Your Shares">
                    <span style={{fontSize: '16px'}}>{numberFormat(32542)}</span>
                </InfoLine>
                <InfoLine name="Your Equity">
                    <span style={{fontSize: '16px'}}>{percentFormat(.032)}%</span>
                </InfoLine>
                <InfoLine name="Your Avg. Cost" >
                    <span 
                    style={{
                        fontSize: '16px',
                        color: colors.red
                    }}>
                        ${numberFormat(23)}
                    </span>
                </InfoLine>
                <InfoLine name="Return">
                    <span 
                    style={{
                        fontSize: '16px',
                        color: colors.red
                    }}>
                        {percentFormat(-.055)}%
                    </span>
                </InfoLine>
            </div>
        </div>
    )
}

const InfoLine = (props) => (
    <label style={{ display: 'flex', justifyContent: 'space-between' }} >
        <span style={ spanStyle }>{props.name} </span>
        {props.children}
    </label>    
)

const playerCardStyle = {
    display: 'flex',
    minWidth: '300px',
    padding: '10px 0'
}

const imageStyle = {
    widht: '100px',
    height: '150px',
    borderRadius: '3px',
    border: `1px solid ${colors.third}`
}

const infoStyle = {
    padding: '0 15px', 
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '22px',
    width: '100%'
}

const spanStyle = {
    color: colors.textLowlight,
    fontSize: '12px'
}


export default holdingCard;