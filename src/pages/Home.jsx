import React, { useState } from 'react';
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../images/image1.png'; 
import Image2 from '../images/image2.png';
import Image3 from '../images/image3.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-size: cover;
    min-height: 100vh; /* Set minimum height to ensure content is fully visible */
`;

const TextMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white; 
    font-size: 4vw; 
    text-align: center;
    font-family: 'Your Preferred Font', sans-serif; 
    font-weight: bold; 
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); 
`;

const Card = styled.div`
    background-color: ;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px auto; /* Adjust margin */
    max-width: 600px; /* Reduce the card size */
`;

const CardTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
`;

const CardContent = styled.div`
    font-size: 18px;
`;

const SmallCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const SmallCard = styled.div`
    flex: 0 1 calc(33.33% - 10px);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SmallCardImage = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const Home = () => {
    const [showLogin, setShowLogin] = useState(false);

    // Sample images for the carousel (imported from local files)
    const images = [Image1, Image2, Image3];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Container>
            <Header showLogin={showLogin} setShowLogin={setShowLogin} />
            <MenuBar /> 
            <Card>
                <CardTitle>Welcome!</CardTitle>
                <CardContent>
                   Page under construction .....
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Slide ${index}`} />
                        ))}
                    </Slider>
                </CardContent>
            </Card>
            <SmallCardContainer>
                <SmallCard>
                    <SmallCardImage src={Image1} alt="Image 1" />
                </SmallCard>
                <SmallCard>
                    <SmallCardImage src={Image2} alt="Image 2" />
                </SmallCard>
                <SmallCard>
                    <SmallCardImage src={Image3} alt="Image 3" />
                </SmallCard>
            </SmallCardContainer>
            <TextMessage></TextMessage>
            <Footer />
            <ToastContainer />
        </Container>
    );
};

export default Home;
