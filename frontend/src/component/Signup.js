import React, { useState } from 'react';
import api from '../services/api';

const Signup = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const manageSignup = async (e) => {

        e.preventDefault();

        try{

            await api.post('/users/signup', { name, email, password });
            alert('--- SIGNED UP SUCCESSFULLY.');
        } catch (error) {

            alert('--- SIGNUP FAILED: ' + error.response?.data?.message || error.message);
        }
    };

    return (

        <form onSubmit={manageSignup}>
            <h1> [ SIGNUP ]</h1>
            <input 
                type="text"
                placeholder="NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Button type="Submit">SIGNUP</Button>
        </form>
    ) ;
    
};

export default Signup;