import React from 'react';
import styled, { keyframes } from "styled-components";
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';

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
        linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), /* Overlay */
        url('/movie.jpg'); /* Background Image */
    background-position: 25% 0; /* Positioning the background image */
    animation: ${slide} 20s linear infinite alternate; /* Animation for sliding effect */

    @media screen and (max-width: 768px) {
        background-position: center;
    }
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Title = styled.h2`
    text-align: center;
    margin-top: 30px;
`;

const DifferentTitle = styled.h2`
    text-align: center;
    margin-top: 0;
    font-size: 2.5rem;
    color: #78281F;
    font-family: 'Your Preferred Font', sans-serif;
`;

const LinkButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
`;

const Home = () => {
    return (
        <Container>
            <Header />
            <Content>
                <DifferentTitle>Related Page. Under construction</DifferentTitle>
                <LinkButton>Explore More</LinkButton>
                <Title>"Escape into the world of film."</Title>
            </Content>

            <Footer />
            <ToastContainer />
        </Container>
    );
};

export default Home;
