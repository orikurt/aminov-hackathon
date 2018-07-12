import React from 'react';

const bannerStyle = {
    width: '500px',
    height: '142px',
    display: 'flex',
    margin: '0 auto'
}

export default function(props){
    return (
        <div style={{ ...bannerStyle, ...props.style }}>
            <img 
                style={{width: '100%', height: '100%'}} 
                src="/banner.png"
                alt="GameTime Market" />
        </div>        
    )
}