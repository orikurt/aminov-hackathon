import React from 'react';
import Search from '../components/Search';

const Home = () => (
    <div style={homeStyle}>
        <h3>GameTime Market</h3>
        <Search style={searchStyle}/>
    </div>
)

const homeStyle = {
    textAlign: 'center'
}

const searchStyle = {
    width: '500px',
    margin: '0 auto'
}

export default Home;