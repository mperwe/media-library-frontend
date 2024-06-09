// LoginForm.js


import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import backgroundImage from '../images/movie22.jpg';
import 'react-toastify/dist/ReactToastify.css';
import styled, { keyframes } from "styled-components";

import axios from "axios";
import { API_URL } from "../utils/constants";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const LoginFormContainer = styled.form`
    display: flex;
    justify-content: center;
    padding: 100px;
    height: 50vh;
    width: 100vw;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
`;


const LoginFormElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

const LoginFormInput = styled.input`
    margin-bottom: 0px;
    padding: 8px;
`;

const LoginButton = styled.button`
    background-color: #2ecc71;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-items: center; 
`;

const BackgroundCard = styled.div`
    width: auto;
    padding: 25px;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: auto;
`;

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
    background-color: #EAEDED;
    background-size: cover;
    background-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
        url('/movie.jpg'); 
    background-position: 25% 0; 
    animation: ${slide} 20s linear infinite alternate; 
`;

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (email && password) {
                const result = await axios.post(`${API_URL}/users/login`, {
                    password: password,
                    email: email
                });
                if (result && result.data?.token) {
                    navigate('/dashboard');
                    localStorage.setItem('token', result.data.token);
                } else {
                    toast('User Login failed, contact Administrator');
                }
            }
        } catch (error) {
            toast('User Login failed, contact Administrator');
        }
    };

    return (
        <Container>
        <Header  action='Register' onClick={()=>navigate('/register')}/>
        <LoginFormContainer onSubmit={handleLogin}>
            <LoginFormElement>
                <BackgroundCard>
                    <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
                        Welcome! Please login to access your account......
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
            </LoginFormElement>
        </LoginFormContainer> 
        <Footer />
        <ToastContainer />
      </Container>

        
    );
};

export default LoginForm;





