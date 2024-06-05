import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';

// Background image
import backgroundImage from '../images/moviebg11.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Background = styled.div`
  flex: 1;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CardContainer = styled.div`
  width: 90%;
  max-width: 600px;
`;

const Card = styled(Link)`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardContent = styled.div`
  text-align: center;
  padding: 10px;
  color: #000;
`;

const Title = styled.h2`
  margin: 5px;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const ContextText = styled.p`
  margin: 5px 0 0;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Container>
      <Background>
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
            {/* Add more cards here if needed */}
          </CardContainer>
        </Content>
      </Background>
      <Footer />
    </Container>
  );
};

export default Home;
