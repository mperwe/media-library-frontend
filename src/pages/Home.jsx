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
  margin-top: 1px;
`;

const Card = styled(Link)`
  width: 2500px;
  height: 1000px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  overflow: hidden; 
`;

const CardImage = styled.img`
  max-width: 1000%; 
  max-height: 1000%; 
  object-fit: cover; 
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CardContainer>
          <Card to={`/page1`}>
            <CardImage src={`moviebg2.jpg`} alt={`Image 1`} />
          </Card>
        </CardContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
