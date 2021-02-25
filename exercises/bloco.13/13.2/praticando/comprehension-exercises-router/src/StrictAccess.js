import React from 'react';
import { Redirect } from 'react-router-dom';

const StrictAccess = ({ user }) => {
    const { username, password } = user;
    if (!(username==='joao' && password === '1234')) {
        alert('Acess denied');
        return <Redirect to="/" />
    };
    return (
        <p>Welcome { user.username } </p>
    );
}

export default StrictAccess;