import React from 'react';
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #EAEDED;
    background-size: cover;
    background-image: url('/moviebg11.jpg');
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
            <MenuBar /> 

            <Content>
                <DifferentTitle>Engage Audiences Across Platforms</DifferentTitle>
                <LinkButton>Explore More</LinkButton>
                <Title>"Escape into the world of film."</Title>
            </Content>

            <Footer />
            <ToastContainer />
        </Container>
    );
};

export default Home;
