import React, { useState } from 'react'
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer'
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm'
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Home = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <Container>
      <Header showLogin={showLogin} setShowLogin={setShowLogin}/>
      {showLogin ? <LoginForm/>:<RegisterForm />}
      <Footer />
      <ToastContainer />
    </Container>
  )
}

export default Home;