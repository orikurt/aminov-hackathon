import React from 'react';

const playerCardStyle = {
    display: 'flex'
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
            <h3>{props.player.name}</h3>
        </div>
    )
}

export default playerCard;