import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

export const API_KEY = "a9118a3a";

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

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;

const MovieImage = styled.img`
  width: 55px;
  height: 48px;
  margin: 15px;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
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
justify-content: flex-start;
`;

const RegisterForm = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;  // Align to the right

`
const RegisterFormInput = styled.input`
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
  height: 30vh;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  // eslint-disable-next-line
  const [movieList, updateMovieList] = useState([]);
  // eslint-disable-next-line
  const [selectedMovie, onMovieSelect] = useState();

  // New state for registration form
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // New state for showing/hiding registration form
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const fetchData = async (searchString) => {
    const backendUrl = "http://localhost:4100/movies/";
    const response = await Axios.get(backendUrl);
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("");
    updateSearchQuery(e.target.value);
    fetchData(e.target.value);
  };

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
        <SearchBox>
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
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
    <RegisterButton type="submit">Register</RegisterButton>
    </BackgroundCard>

  </RegisterForm>
</RegisterFormContainer>

    </Container>
  );

}

export default App;
