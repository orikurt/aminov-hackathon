import React from 'react';
import { numberFormat } from '../utils/format';
import { colors } from '../utils/uiScheme';

const playerCardStyle = {
    display: 'flex',
}

const imageStyle = {
    widht: '120px',
    height: '180px',
    borderRadius: '3px',
    border: `1px solid ${colors.third}`
}

const infoStyle = {
    padding: '0 15px', 
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '30px'
}

const playerCard = (props) => {
    return (
        <div style={playerCardStyle}>
            <img src={`/${props.player.image_url}`} alt={props.player.name} style={imageStyle} />
            <div style={ infoStyle }>
                { props.player ? 
                    <label style={{fontSize: '140%'}}>
                        {props.player.name}
                        { props.stock ? <span style={{color: colors.textLowlight}}> {props.stock.symbol} </span> : null }
                    </label> : null }
                { props.player ? <label>{props.player.team}</label> : null }
                { props.player ? <label>#{props.player.number} {props.player.height} {props.player.weight}</label> : null }
                { props.player ? <label>
                    <span style={{color: colors.textLowlight}}>Experience </span>
                    <span>{props.player.experience}</span>
                </label> : null }
                { props.stock ? <label >
                    <span style={{color: colors.textLowlight}}>Last Price </span>
                    <span style={{fontSize: '18px', color: colors.third}}>${numberFormat.format(props.stock.price)}</span>
                </label> : null}
                { props.stock ? <label>
                    <span style={{color: colors.textLowlight}}>Total Shares </span>
                    <span style={{fontSize: '18px'}}>{numberFormat.format(props.stock.shares)}</span>
                </label> : null }
            </div>
        </div>
    )
}

export default playerCard;