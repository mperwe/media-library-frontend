import React, {useState} from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const MovieImage = styled.img`
  width: 55px;
  height: 48px;
  margin: 15px;
`;

const RegisterButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RegisterFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;  // Align to the right
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-image: url('/moviebackground.jpg');
    background-size: cover;
    background-position: center;
    justify-content: start;
`;

const RegisterForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const RegisterFormInput = styled.input`
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 15px;
  width: 88%;
`;

const BackgroundCard = styled.div`
  width: 38%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;  // Set the background color to white
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Optional: Add a box shadow for a card-like appearance
  height: 40vh;
`;

const Home = () => {


// New state for registration form
const [registerUsername, setRegisterUsername] = useState("");
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");

// New state for showing/hiding registration form
const [showRegisterForm, setShowRegisterForm] = useState(false);
const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    // Add your user registration logic here
    // For simplicity, we'll just log the registration details
    console.log("User registered:", {
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
    });
    // Close the registration form
    setShowRegisterForm(false);
  };


    return (
        <Container>
            <Header>
                <AppName>
                    <MovieImage src="logo12.jpg" />
                    Frank's Movie Room
                </AppName>
                <RegisterButton onClick={() => setShowRegisterForm(true)}>
                    Login
                </RegisterButton>
            </Header>


            <RegisterFormContainer>
                <RegisterForm >
                    <BackgroundCard>

                        <RegisterFormInput
                            type="text"
                            placeholder="Username"
                        />
                        <RegisterFormInput
                            type="email"
                            placeholder="Email"
                        />
                        <RegisterFormInput
                            type="password"
                            placeholder="Password"
                        />
                        <RegisterButton type="submit">Get Started</RegisterButton>
                    </BackgroundCard>

                </RegisterForm>
            </RegisterFormContainer>

        </Container>
    )
}

export default Home;