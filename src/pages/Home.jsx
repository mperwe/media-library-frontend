import React, { useState } from 'react';
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import backgroundImage from '../images/image4.png';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; 
  font-size: 5vw; 
  text-align: center;
  font-family: 'Your Preferred Font', sans-serif; 
  font-weight: bold; 
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Container>
      <Header showLogin={showLogin} setShowLogin={setShowLogin} />
      <Content>
        {showLogin ? <LoginForm /> : <RegisterForm setShowLogin={setShowLogin} />}
      </Content>
     
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default Home;
