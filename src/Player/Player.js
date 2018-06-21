import React from 'react';
import Styles from './Player.style';

const Player= (props) => (
    <div style={Styles.player}>
        I am player {props.player.name}
    </div>
);

export default Player;