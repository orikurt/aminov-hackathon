import React from 'react';
import MaterialIcon from 'material-icons-react';

const miniAccount = ()=>(<div style={miniStyle}><MaterialIcon icon="account_balance" color="#95a5a6" size={18}/>: 42$</div>)

const miniStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: '#27ae60'
}

export default miniAccount;