import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
`;

const Card = styled(Link)`
  position: relative; 
  width: 2500px; 
  height: 800px; 
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 10px; 
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  overflow: hidden; 
`;

const CardImage = styled.img`
  width: 200%;
  height: 200%;
  object-fit: cover; 
`;

const CardContent = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  margin: 5;
  font-family: 'Arial', sans-serif;
  font-size: 75px;
  color: white;
  font-weight: bold;
`;

const ContextText = styled.p`
  margin: 5px 0 0;
  font-family: 'Arial', sans-serif;
  font-size: 30px;
  color: white;
  font-weight: ;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CardContainer>
          <Card to={`/page1`}>
            <CardImage src={`moviebg2.jpg`} alt={`Image 1`} />
            <CardContent>
              <Title>Where Every Frame Tells a Theme Story</Title>
              <ContextText>'Unraveling Mysteries, One Movie at a Time!'</ContextText>
            </CardContent>
          </Card>
        </CardContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
