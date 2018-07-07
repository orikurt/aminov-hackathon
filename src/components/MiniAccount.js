import React from 'react';
import MaterialIcon from 'material-icons-react';
import { colors } from '../utils/uiScheme';

const miniAccount = ()=>(
    <div style={miniStyle}>
        <div>
            <MaterialIcon icon="account_balance" color={colors.textLowlight} size={18}/>
            <div>42$</div>
        </div>
        <div style={vl}></div>
        <div>
            <MaterialIcon icon="golf_course" color={colors.textLowlight} size={18}/>
            <div>42</div>
        </div>        
    </div>
    )

const vl = {
    width: '1px',
    height: '32px',
    color: 'rgba(149, 165, 166, 0.3)',
    borderRight: '1px solid'
}

const miniStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: colors.green,
    width: '100px'
}

export default miniAccount;