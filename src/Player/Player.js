import React from "react";
import {playerStyle} from "../Styles"

const player = (props) => (

    <div style={playerStyle}>
        Player {props.name}
    </div>
    
)

export default player;