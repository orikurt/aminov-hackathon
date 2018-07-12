import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import Banner from '../components/Banner';

const headerStyle = {
    textAlign: 'center',
    margin: 0
}

const formStyle = {
    maxWidth: '500px',
    margin: '0 auto'
}

export default function (){
    return (
        <div>
            <Banner />
            <h3 style={ headerStyle }>Register</h3>
            <RegistrationForm style={ formStyle }/>
        </div>
    )
}