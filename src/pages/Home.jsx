import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    padding: 10px;
`;

const DifferentTitle = styled.h2`
    text-align: center;
    margin-top: 0;
    font-size: 2.5rem;
    color: #78281F;
    font-family: 'Your Preferred Font', sans-serif;
`;

const LinkButton = styled.div`
    margin-top: 9px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 36%;
    margin-bottom: 9px; /* Added margin bottom */
`;

const OptionLink = styled(Link)`
    background-color: brown;
    color: white;
    text-align: center;
    border: none;
    padding: 9px 10px;
    font-size: 1rem;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    margin: 3px;
    font-weight: ;
    width: calc(14% - 5px); /* Adjusted width */
    box-sizing: border-box;
`;

const Text = styled.p`
    margin-top: 9px; /* Adjusted margin top */
    font-size: 1.2rem;
    color: #000000;
    visibility: visible;
`;

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Container>
            <Header />
            <Content>
                <DifferentTitle>Engage Audiences Across Mega Platforms</DifferentTitle>
                <LinkButton>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Horror")}>Horror</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Thriller")}>Thriller</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Romance")}>Romance</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Action")}>Action</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Fiction")}>Fiction</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Western")}>Western</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Drama")}>Drama</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Crime")}>Crime</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Comedy")}>Comedy</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Adventure")}>Adventure</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Fantasy")}>Fantasy</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Animation")}>Animation</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Kids")}>Kids</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Documentary")}>Documentary</OptionLink>
                </LinkButton>
                {selectedCategory && <p>You selected: {selectedCategory}</p>}
                <Text>Select a category to explore more!</Text>
            </Content>

            <Footer />
            <ToastContainer />
        </Container>
    );
};

export default Home;
