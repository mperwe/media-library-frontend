import React, { useState } from "react";
//import Axios from "axios";
import styled from "styled-components";

export const API_KEY = "a9118a3a";

// ... (your existing styled components)

const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const LoginButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
// eslint-disable-next-line
const LoginFormInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line
const RegisterFormInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;
const RegisterButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const RegisterUsernameInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  /* Add additional styling specific to the username input if needed */
`;

const RegisterEmailInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  /* Add additional styling specific to the email input if needed */
`;

const RegisterPasswordInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  /* Add additional styling specific to the password input if needed */
`;

function App() {
  // ... (your existing state)

  // New state for login form
  // eslint-disable-next-line
  const [loginUsername, setLoginUsername] = useState("");
  // eslint-disable-next-line
  const [loginPassword, setLoginPassword] = useState("");

  // New state for showing/hiding forms
  const [showForm, setShowForm] = useState(null); // null for no form, 'register' for registration, 'login' for login

  const handleFormToggle = (formType) => {
    setShowForm(formType);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // Add your user login logic here
    // For simplicity, we'll just log the login details
    console.log("User logged in:", {
      username: loginUsername,
      password: loginPassword,
    });
    // Close the login form
    setShowForm(null);
  };

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    // Add your user registration logic here
    // For simplicity, we'll just log the registration details
    console.log("User registered:", {
      username: RegisterUsernameInput,
      email: RegisterEmailInput,
      password: RegisterPasswordInput,
    });
    // Close the registration form
    setShowForm(null);
  };

  return (
    <Container>
      {/* ... (your existing code) */}
      <Header>
        {/* ... (your existing code) */}
        {/* Login button */}
        <LoginButton onClick={() => handleFormToggle('login')}>Login</LoginButton>
        {/* Register button */}
        <RegisterButton onClick={() => handleFormToggle('register')}>
          Register
        </RegisterButton>
      </Header>
      {/* Form */}
      {showForm === 'register' && (
        <RegisterFormContainer>
          <form onSubmit={handleRegisterFormSubmit}>
            {/* ... (your existing registration form inputs) */}
            <RegisterButton type="submit">Register</RegisterButton>
          </form>
        </RegisterFormContainer>
      )}
      {showForm === 'login' && (
        <LoginFormContainer>
          <form onSubmit={handleLoginFormSubmit}>
            {/* ... (your existing login form inputs) */}
            <RegisterButton type="submit">Login</RegisterButton>
          </form>
        </LoginFormContainer>
      )}
      {/* ... (your existing code) */}
    </Container>
  );
}

export default App;
