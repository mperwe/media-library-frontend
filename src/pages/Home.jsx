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
  padding: 30px 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 85px; 
`;

const Card = styled(Link)`
  position: relative;
  width: 2000px; /* Adjusted width */
  height: 700px; /* Adjusted height */
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 80%; /* Adjusted width */
  height: 95%; /* Adjusted height */
  object-fit: cover;
`;

const CardContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  padding: 20px;
  color: #fff; /* Adjusted text color */
`;

const Title = styled.h2`
  margin: 5px;
  font-family: 'Arial', sans-serif;
  font-size: 50px;
  font-weight: bold;
`;

const ContextText = styled.p`
  margin: 5px 0 0;
  font-family: 'Arial', sans-serif;
  font-size: 30px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 30px 40px;
  font-size: 18px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CardContainer>
          <Card to={`/page1`}>
            <CardImage src={`movie24.jpeg`} alt={`Image 1`} />
            <CardContent>
              <Title>Where Every Frame Tells a Theme Story</Title>
              <ContextText>'Unraveling Mysteries, One Movie at a Time!'</ContextText>
              <Link to={`/View`}><Button>Explore More with Us</Button></Link>
            </CardContent>
          </Card>
        </CardContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
