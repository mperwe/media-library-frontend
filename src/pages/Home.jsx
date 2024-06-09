import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
    background-image: url('/movie23.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #EAEDED;

    animation: ${slide} 20s linear infinite alternate;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
`;

const Title = styled.h2`
    margin-top: 30px;
    font-size: 1.5rem;
    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

const DifferentTitle = styled.h2`
    margin-top: 0;
    font-size: 2rem;
    color: #78281F;
    font-family: 'Your Preferred Font', sans-serif;
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

const LinkButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header action='Login' onClick={() => navigate('/login')} />
      <Content>
        <DifferentTitle>Popular Page. Under construction</DifferentTitle>
        <LinkButton type='button' onClick={() => navigate('/login')}>Explore More</LinkButton>
        <Title>"Escape into the world of film."</Title>
      </Content>
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default Home;
