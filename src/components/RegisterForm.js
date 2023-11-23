import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import styled from "styled-components";
import { toast } from 'react-toastify';
import { API_URL } from '../utils/constants'

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
    align-items: flex-end;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-image: url('/moviebg2.jpg');
    background-size: cover;
    background-position: center;
    justify-content: start;
`;

const RegisterFormElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const RegisterFormInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  width: 87%;
`;

const BackgroundCard = styled.div`
  width: 38%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  height: 30vh;
`;

const RegisterForm = () => {
    // Registration form
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const navigate = useNavigate()

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (registerEmail && registerPassword && registerUsername) {
                const result = await axios.post(`${API_URL}/auth/register`, {
                    username: registerUsername,
                    password: registerPassword,
                    email: registerEmail
                })
                if (result && result.data?.token) {
                    navigate('/dashboard')
                    localStorage.setItem('token', result.data.token)
                } else {
                    toast('User registration failed, contact Administrator')
                }
            }
        } catch (error) {
            toast('User registration failed, contact Administrator')
        }

    };

    return (
        <RegisterFormContainer onSubmit={handleRegisterFormSubmit}>
            <RegisterFormElement >
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
        </RegisterFormContainer>
    )
}

export default RegisterForm;