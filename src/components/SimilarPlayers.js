import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { colors } from '../utils/uiScheme';

const similarPlayers = (props) => {
    let data = [];
    for (let i =0; i < 7; i++){
        const player = props.players[Math.floor( Math.random() * props.players.length )];
        if (player) {
            data.push( player );
        }
    }
    return (<div style={{ minWidth: '350px' }}>
        <h5 style={{ color:  colors.darkGray, textAlign: 'center' }}>People also interested in...</h5>
        <div style={containerStyle}>
            {
                data.map((player) => (
                    <div style={{ width: '60px' }}>
                        <Image style={imageStyle} src={`/${player.image_url}`} alt={player.name} />
                        <label style={{ fontSize: '12px', width: '60px', textAlign: 'center', color: colors.textLowlight }}>{player.name}</label>
                    </div>
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
    width: '60px',
    border: `1px solid ${colors.third}`,
    borderRadius: '2px'
}

const mapStateToProps = (state)=>({
    players: state.players.list,
})

export default connect(mapStateToProps)(similarPlayers);
