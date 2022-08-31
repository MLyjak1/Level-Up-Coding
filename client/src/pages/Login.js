import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// import "./pages.css";

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
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
        <div className="box">
            <div className='panel'>
                <main className='justify-items-center'>
                    {/* TODO: Style the login card! */}
                    <article className='login-card flex flex-col '>
                        <div className='login-card-header'>
                            <h2>Login</h2>
                        </div>
                        <div className='login-card-body flex-col '>
                            {/* If there is data, return to homepage */}
                            {data ? (<Link to='/'></Link>) : (
                                <form
                                    className='flex flex-col '
                                    onSubmit={handleFormSubmit}>
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
            </div>
        </div>
    );
};

export default Login;