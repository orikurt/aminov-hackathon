import React from 'react';
import Styles from './Player.style';

const player = (props)=>(
    <div style={Styles.player}>
        I am player {props.name}
    </div>
);

export default player;