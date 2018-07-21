import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { colors } from '../utils/uiScheme';

const similarPlayers = (props) => {
    let data = [];
    for (let i =0; i < 7; i++){
        const player = props.players[Math.floor( Math.random() * props.players.length )];
        if (player) {
            data.push( player );
        }
    }
    return (<div style={{ width: '100%', minWidth: '350px', ...props.style }}>
        <h5 style={{ color:  colors.darkGray, textAlign: 'center' }}>People also interested in...</h5>
        <div style={containerStyle}>
            {
                data.map((player) => (
                    <Link to={`/players/${player.uid}`} style={{ width: '70px', margin: '0 10px' }}>
                        <Image style={imageStyle} src={`/${player.image_url}`} alt={player.name} />
                        <label style={{ fontSize: '12px', width: '60px', textAlign: 'center', color: colors.textLowlight }}>{player.name}</label>
                    </Link>
                ))
            }
        </div>
    </div>)
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around'
}

const imageStyle = {
    width: '100%',
    border: `1px solid ${colors.third}`,
    borderRadius: '2px'
}

export default similarPlayers;
