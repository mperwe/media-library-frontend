import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';

const slide = keyframes`
  0%, 20% { transform: translateX(0); }
  25%, 45% { transform: translateX(-100%); }
  50%, 70% { transform: translateX(-100%); }
  75%, 95% { transform: translateX(-200%); }
  100% { transform: translateX(-200%); } /* Ensure smooth transition back to first slide */
`;

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

const SlideshowContainer = styled.div`
  width: 100%;
  max-height: 800px;
  overflow: hidden;
  position: relative;
`;

const Slideshow = styled.div`
  display: flex;
  animation: ${slide} 10s linear infinite;
`;

const Slide = styled.img`
  width: 100%;
  height: auto;
  border-right: 2px solid white;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const Card = styled(Link)` /* Change Card to Link */
  width: 200px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none; /* Remove default underline */
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  border: 1px solid white;
  margin: 0 5px;
  cursor: pointer;
`;

const Home = () => {
  const images = [
    'moviebg2.jpg',
    'moviebg2.jpg',
    'moviebg2.jpg',
    'moviebg4.jpg',
    'moviebg5.jpg',
    'moviebg6.jpg',
    'moviebg7.jpg',
    'moviebg8.jpg',
    'moviebg9.jpg',
    'moviebg10.jpg',
    'moviebg11.jpg',
    'moviebg12.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (slideshowRef.current) {
      const firstSlide = slideshowRef.current.children[0];
      const lastSlideClone = firstSlide.cloneNode(true);
      slideshowRef.current.appendChild(lastSlideClone);
    }
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Container>
      <Header />
      <Content>
        <SlideshowContainer>
          <Slideshow
            ref={slideshowRef}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
            ))}
          </Slideshow>
        </SlideshowContainer>
        <IndicatorContainer>
          {images.map((_, index) => (
            <Indicator
              key={index}
              active={index === currentSlide}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </IndicatorContainer>
        <CardContainer>
          {[...Array(10)].map((_, index) => (
            <Card key={index} to={`/page${index + 1}`}> {/* Add to prop to Link */}
              <img src={`image${index + 1}.jpg`} alt={`Image ${index + 1}`} /> {/* Add img tag for image */}
            </Card>
          ))}
        </CardContainer>
      </Content>
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default Home;
