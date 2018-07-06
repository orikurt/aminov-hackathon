import React from 'react';

const playerCardStyle = {
    display: 'flex',
    // flexDirection: 'column'
}

const imageStyle = {
    widht: '120px',
    height: '180px',
    borderRadius: '3px'
}

const playerCard = (props) => {
    return (
        <div style={playerCardStyle}>
            <img src={`/${props.player.image_url}`} alt={props.player.name} style={imageStyle} />
            <div style={{padding: '5px'}}>
                <h3>{props.player.name}</h3>
                {props.stock ? <h3>{props.stock.price}$</h3> : null}
            </div>
        </div>
    )
}

export default playerCard;