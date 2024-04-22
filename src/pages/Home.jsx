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
    padding: 20px;
`;

const DifferentTitle = styled.h2`
    text-align: center;
    margin-top: 0;
    font-size: 2.5rem;
    color: #78281F;
    font-family: 'Your Preferred Font', sans-serif;
`;

const LinkButton = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 30%;
`;

const OptionLink = styled(Link)`
    background-color: brown;
    color: white;
    text-align: center;
    border: none;
    padding: 10px 20px;
    font-size: 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    margin: 5px;
    font-weight: ;
    width: calc(30.33% - 10px); /* Adjusted width */
    box-sizing: border-box;
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
                </LinkButton>
                <LinkButton>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Action")}>Action</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Science Fiction")}>Science Fiction</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Westerns")}>Westerns</OptionLink>
                </LinkButton>
                <LinkButton>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Drama")}>Drama</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Crime")}>Crime</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Comedy")}>Comedy</OptionLink>
                </LinkButton>
                <LinkButton>
                    {/* Add three more categories here */}
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Adventure")}>Adventure</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Fantasy")}>Fantasy</OptionLink>
                    <OptionLink to="/category" onClick={() => handleCategoryChange("Animation")}>Animation</OptionLink>
                </LinkButton>
                {selectedCategory && <p>You selected: {selectedCategory}</p>}
            </Content>

            <Footer />
            <ToastContainer />
        </Container>
    );
};

export default Home;
