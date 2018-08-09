import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { colors } from '../utils/uiScheme';
import Tooltip from './Tooltip';

const offersBar = (props) => (
    <div>
        {
            props.offers.map((offer, i) => (
                <Tooltip value={`Price: ${offer.price} Shares: ${offer.quantity}`} key={i}>
                    <Glyphicon 
                        glyph="bookmark" 
                        style={{ 
                            color: ( offer.type_ask ? colors.third : colors.green ), 
                            float: (offer.type_ask ? 'right' : 'left') }}
                         />
                </Tooltip>
            ))
        }
    </div>
);

export default offersBar;