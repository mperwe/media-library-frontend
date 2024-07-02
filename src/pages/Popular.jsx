import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// Import images

import movie21 from '../images/movie21.jpg'
import movie23 from '../images/movie23.jpg'
import movie24 from '../images/movie24.jpeg'
import moviebg5 from '../images/moviebg5.jpg'


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
        url('/movie23.');
    animation: ${slide} 25s linear infinite alternate;
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

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Card = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    /* Background image */
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height: 200px; /* Adjust as per your design */
`;

const Polular = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Header action='Login' onClick={() => navigate('/login')} />
            <Content>
                <CardContainer>
                    <Card image={movie21}>
                        <h3>Title 1</h3>
                    </Card>
                    <Card image={movie23}>
                        <h3>Title 2</h3>
                    </Card>
                    <Card image={movie24}>
                        <h3>Title 3</h3>
                    </Card>
                    <Card image={moviebg5}>
                        <h3>Title 4</h3>
                    </Card>
                </CardContainer>
                
            </Content>
            <Footer />
            <ToastContainer />
        </Container>
    );
};

export default Polular;
