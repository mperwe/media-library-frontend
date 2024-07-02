// LoginForm.js

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

import { API_URL } from '../utils/constants';
import backgroundImage from '../images/movie22.jpg';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const slide = keyframes`
    0% {
        background-position: 0% 0;
    }
    100% {
        background-position: 100% 0;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #eaeaea;
    background-size: cover;
    background-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
        url(${backgroundImage});
    background-position: center;
    animation: ${slide} 20s linear infinite alternate;
`;

const LoginFormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    height: 80vh;
`;

const BackgroundCard = styled.div`
    width: 300px;
    padding: 25px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const LoginFormInput = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    width: 95%;
`;

const LoginButton = styled.button`
    background-color: #2ecc71;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
`;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (email && password) {
                const result = await axios.post(`${API_URL}/users/login`, {
                    email: email,
                    password: password
                });
                if (result && result.data?.token) {
                    localStorage.setItem('token', result.data.token);
                    navigate('/dashboard');
                } else {
                    toast.error('User login failed, please contact Administrator.');
                }
            }
        } catch (error) {
            toast.error('User login failed, please contact Administrator.');
        }
    };

    return (
        <Container>
            <Header action="Register" onClick={() => navigate('/register')} />
            <LoginFormContainer onSubmit={handleLogin}>
                <BackgroundCard>
                    <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
                        Welcome! Please login to access your account.
                    </p>
                    <LoginFormInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <LoginFormInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <LoginButton type="submit">Login</LoginButton>
                    <p style={{ textAlign: 'center', marginTop: '20px' }}>
                        Don't have an account? <a href="/register">Sign up here</a>.
                    </p>
                </BackgroundCard>
            </LoginFormContainer>
            <Footer />
            <ToastContainer />
        </Container>
    );
};

export default LoginForm;
