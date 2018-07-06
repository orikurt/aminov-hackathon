import React from 'react';
import { numberFormat } from '../utils/format';

const playerCardStyle = {
    display: 'flex',
}

const imageStyle = {
    widht: '120px',
    height: '180px',
    borderRadius: '3px'
}

const infoStyle = {
    padding: '0 15px', 
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '30px'
}

const playerCard = (props) => {
    console.log(props)
    return (
        <div style={playerCardStyle}>
            <img src={`/${props.player.image_url}`} alt={props.player.name} style={imageStyle} />
            <div style={ infoStyle }>
                { props.player ? <label style={{fontSize: '140%'}}>{props.player.name}</label> : null }
                { props.stock ? <label style={{fontSize: '120%'}}>${props.stock.price}</label> : null}
                { props.player ? <label>{props.player.team}</label> : null }
                { props.player ? <label>#{props.player.number} {props.player.height} {props.player.weight}</label> : null }
                { props.stock ? <label><span style={{color: '#aaa'}}>Total Shares </span>{numberFormat.format(props.stock.shares)}</label> : null }
                { props.player ? <label><span style={{color: '#aaa'}}>Experience </span>{props.player.experience}</label> : null }
            </div>
        </div>
    )
}

export default playerCard;