import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';

// Define the keyframes for sliding effect
const slide = keyframes`
  0% {
    transform: translateX(0%);
  }
  10% {
    transform: translateX(0%);
  }
  20% {
    transform: translateX(-100%);
  }
  30% {
    transform: translateX(-100%);
  }
  40% {
    transform: translateX(-200%);
  }
  50% {
    transform: translateX(-200%);
  }
  60% {
    transform: translateX(-300%);
  }
  70% {
    transform: translateX(-300%);
  }
  80% {
    transform: translateX(-400%);
  }
  90% {
    transform: translateX(-400%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border-color: white;
  background-size: cover;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CardContainer = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  position: relative;
`;

const Slideshow = styled.div`
  display: flex;
  animation: ${slide} 60s linear infinite; /* Adjust duration accordingly */
`;

const Slide = styled.img`
  width: 100%; /* Ensure all images occupy the same width */
  height: auto; /* Maintain aspect ratio */
  max-width: 100%; /* Ensure the image doesn't exceed the container width */
  border-right: 2px solid white; /* Separate images with a border */
`;

const Home = () => {
  const images = [
    'moviebg1.jpg',
    'moviebg2.jpg',
    'moviebg3.jpg',
    'moviebg4.jpg',
    'moviebg5.jpg',
    'moviebg6.jpg',
    'moviebg7.jpg',
    'moviebg8.jpg',
    'moviebg9.jpg',
    'moviebg10.jpg',
    'moviebg11.jpg',
    'moviebg12.jpg',
    // Add more image paths as needed
  ];

  // Ref to keep track of the slideshow container
  const slideshowRef = useRef();

  // Duplicate the first slide and add it to the end of the images array
  useEffect(() => {
    if (slideshowRef.current) {
      const firstSlide = slideshowRef.current.children[0];
      const lastSlideClone = firstSlide.cloneNode(true);
      slideshowRef.current.appendChild(lastSlideClone);
    }
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <CardContainer>
          <Slideshow ref={slideshowRef}>
            {images.map((image, index) => (
              <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
            ))}
          </Slideshow>
        </CardContainer>
      </Content>
      <Footer />
      <ToastContainer />
    </Container>
  );
};

export default Home;
