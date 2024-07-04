import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from "styled-components";
import { toast } from 'react-toastify';
import { API_URL } from '../utils/constants';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/movie22.jpg';

const RegisterButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
   background-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
        url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const RegisterFormElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const RegisterFormInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  width: 88%;
`;

const BackgroundCard = styled.div`
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AboveFormText = styled.p`
  color: #ffffff;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;
const AnotherAboveFormText = styled.p`
  color: white; 
  font-size: 30px; 
  font-family: Arial, Helvetica, sans-serif
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
`;

const BelowFormText = styled.p`
  color: white; 
  font-size: 20px;
  font-family: 'Verdana', sans-serif; 
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
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
        linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.0)), 
        url('/moviebg2.jpg');
    background-position: 25% 0; 
    animation: ${slide} 15s linear infinite alternate; 
`;


const RegisterForm = ({ setShowLogin }) => {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navigate = useNavigate()

  const handleRegisterFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (registerEmail && registerPassword && registerUsername) {
        const result = await axios.post(`${API_URL}/users/signup`, {
          username: registerUsername,
          password: registerPassword,
          email: registerEmail,
        });
        if (result && result.data?.token) {
          localStorage.setItem('token', result.data.token);
          setShowLogin(true)
        } else {
          toast('User registration failed, contact Administrator', 1000);
        }
      }
    } catch (error) {
      toast('User registration failed, contact Administrator', 1000);
    }
  };

  return (
    <Container>
    <Header  action='Login' onClick={()=>navigate('/login')} />
    <RegisterFormContainer onSubmit={handleRegisterFormSubmit}>
      <AboveFormText>"Movies for every mood, at your fingertips."</AboveFormText>
      <AnotherAboveFormText>Register and start your membership today</AnotherAboveFormText>
      
      <RegisterFormElement>
        <BackgroundCard>
          <RegisterFormInput
            type="text"
            placeholder="Username"
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
            required
          />
          <RegisterFormInput
            type="email"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />
          <RegisterFormInput
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />
          <RegisterButton type="submit">Get Started</RegisterButton>
        </BackgroundCard>
      </RegisterFormElement>
      <BelowFormText>Comfort is guaranteed.</BelowFormText>
    </RegisterFormContainer>
    <Footer />
    <ToastContainer />
  </Container>

  );
};

export default RegisterForm;
