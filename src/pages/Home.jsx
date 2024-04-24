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
  height: 1000px; 
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
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const CardContent = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  margin: 0px;
  font-family: 'Arial', sans-serif;
  font-size: 70px;
  color: white;
  font-weight: bold;
`;

const ContextText = styled.p`
  margin: 10px 0 0;
  font-family: 'Arial', sans-serif;
  font-size: 40px;
  color: white;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 20px 60px;
  font-size: 30px;
  background-color: #2ecc71;
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
            <CardImage src={`movie21.jpg`} alt={`Image 1`} />
            <CardContent>
              <Title>Where Every Frame Tells a Theme Story</Title>
              <ContextText>---------</ContextText>
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
