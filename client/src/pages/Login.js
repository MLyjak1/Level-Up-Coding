import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import { removeClientSetsFromDocument } from '@apollo/client/utilities';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: ', password: ' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // Updates the state based on the form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Submits form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main>
            {/* TODO: Style the login card! */}
            <article className='login-card'>
                <div className='login-card-header'>Login</div>
                <div className='login-card-body'>
                    {/* If there is data, return to homepage */}
                    {data ? (<Link to='/'></Link>) : (
                        <form onSubmit={handleFormSubmit}>
                            <input 
                                className='form-input'
                                placeholder='Username'
                                name='username'
                                type='text'
                                value={formState.username}
                                onChange={handleChange}
                            />
                            <input 
                                className='form-input'
                                placeholder='Email'
                                name='email'
                                type='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input 
                                className='form-input'
                                placeholder='Password'
                                name='password'
                                type='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            {/* Hovering over submit button changes cursor to be pointer */}
                            <button
                                className='submit-btn'
                                style={{ cursor: 'pointer' }}
                                type='submit'
                            >
                                Submit
                            </button>
                        </form>
                    )}

                    {/* TODO: Add in error message? */}
                </div>
            </article>
        </main>
    )

};
export default Login;