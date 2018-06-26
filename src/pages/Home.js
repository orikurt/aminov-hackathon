import React from 'react';
import Search from '../components/Search';

const Home = () => (
    <div style={homeStyle}>
        <div style={bannerStyle}>
            <img style={{width: '100%', height: '100%'}} src="banner.png" />
        </div>
        <Search style={searchStyle}/>
    </div>
)

const homeStyle = {
    textAlign: 'center',
}

const bannerStyle = {
    width: '500px',
    height: '142px',
    display: 'flex',
    margin: '0 auto'
}

const searchStyle = {
    width: '500px',
    margin: '0 auto'
}

export default Home;