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
    background-color: #EAEDED;
    background-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), 
        url('/movie23.jpg');
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
`;

const Polular = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Header action='Login' onClick={() => navigate('/login')} />
            <Content>
                <CardContainer>
                    <Card>
                        <h3>Title 1</h3>
                    </Card>
                    <Card>
                        <h3>Title 2</h3>
                    </Card>
                    <Card>
                        <h3>Title 3</h3>
                    </Card>
                    <Card>
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
