import React, { useState } from 'react';
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 110vh;
    background-size: 98% auto; 
    background-image: url('movie13.jpg'); 
    background: linear-gradient(to bottom, rgba(1, 0, 0, 0.6), rgba());
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const DifferentTitle = styled.h2`
    text-align: center;
    margin-top: 0;
    font-size: 2.5rem;
    color: #78281F;
    font-family: 'Your Preferred Font', sans-serif;
`;

const LinkButton = styled.select`
    appearance: none;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
`;

const Option = styled.option`
    color: black;
`;

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <Container>
            <Header />
            <Content>
                <DifferentTitle>Engage Audiences Across Mega Platforms</DifferentTitle>
                <LinkButton value={selectedCategory} onChange={handleCategoryChange}>
                    <Option value="">Explore More</Option>
                    <Option value="Horror">Horror</Option>
                    <Option value="Thriller">Thriller</Option>
                    <Option value="Romance">Romance</Option>
                    <Option value="Action">Action</Option>
                    <Option value="Science Fiction">Science Fiction</Option>
                    <Option value="Westerns">Westerns</Option>
                    <Option value="Drama">Drama</Option>
                    <Option value="Crime">Crime</Option>
                    <Option value="Comedy">Comedy</Option>
                </LinkButton>
                {selectedCategory && <p>You selected: {selectedCategory}</p>}
            </Content>

            <Footer />
            <ToastContainer />
        </Container>
    );
};

export default Home;
