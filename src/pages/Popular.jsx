import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import movie21 from '../images/movie21.jpg';
import movie22 from '../images/movie22.jpg';
import movie23 from '../images/movie23.jpg';
import movie24 from '../images/movie24.jpeg';
import movie25 from '../images/movie25.jpg';
import movie26 from '../images/movie26.jpg';
import movie28 from '../images/movie28.png';

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
    background-image: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), 
    url('/movie2.jpeg');  
    animation: ${slide} 100s linear infinite alternate;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 100px;
    padding: 0 10px;
    max-width: 1500px; 
    width: 100%;
`;

const Card = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height: 200px;
`;

const Polular = () => {
    const navigate = useNavigate();

    return (
        <Container>
           
            <Header action='Login' onClick={() => navigate('/login')} />
            <Content>
                <CardContainer>
                    {[movie21, movie22, movie23, movie24, movie25, movie26, movie28].map((image, index) => (
                        <Card key={index} image={image} />
                    ))}
                </CardContainer>
            </Content>
            <Footer />
            <ToastContainer />
        </Container>
    );
};

export default Polular;
