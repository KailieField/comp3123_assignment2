import React, { useState } from 'react';
import api from '../services/api';

const Login = () => {

    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const manageLogin = async (e) => {

        e.preventDefault();
        try{

            const response = await api.post('/users/login', { username, email, password });
            localStorage.setItem('token', response.data.jwt_token); //<-- saving token/ storing dummy data
            alert('-- LOGGED IN.');

        } catch (error) {

            // const errorMessage = error.resonse?.data?.message || error.message || 'Unknown Error' ;
            alert('-- LOGIN FAILED: ' + (error.resonse?.data?.message || error.message));
        }
    };

    return (

        <form onSubmit={manageLogin}>
            <h1>[ LOGIN ]</h1>
            <input
                type="username"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
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
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">LOGIN</button>
        </form>
    );
};

export default Login;