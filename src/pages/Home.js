import React from 'react';
import Search from '../components/Search';
import Banner from '../components/Banner';

const Home = () => { 
    return (
        <div style={homeStyle}>
            <Banner />
            <Search style={searchStyle} />
        </div>
    )
}

const homeStyle = {
    textAlign: 'center',
    padding: '15px 0'
}

const searchStyle = {
    width: '500px',
    margin: '0 auto'
}

export default Home;