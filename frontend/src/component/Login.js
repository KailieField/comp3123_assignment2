import React, { useState } from 'react';
import api from '../services/api';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const manageLogin = async (e) => {

        e.preventDefault();
        try{

            const response = await api.post('/users/login', { email, password });
            localStorage.setItem('token', response.data.token); //<-- saving token
            alert('-- LOGGED IN.');

        } catch (error) {

            alert('-- LOGIN FAILED.' + error.resonse?.data?.message || error.message );
        }
    };

    return (

        <form onSubmit={manageLogin}>
            <h1>[ LOGIN ]</h1>
            <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword=(e.target.value)}
                required
            />
            <button type="submit">LOGIN</button>
        </form>
    );
};

export default Login;