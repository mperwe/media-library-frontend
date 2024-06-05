import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import MovieComponent from '../components/MovieComponent';
import MovieInfoComponent from '../components/MovieInfoComponent';
import { API_URL } from "../utils/constants";
import Footer from '../components/Footer';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RegisterButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  width: 100%; /* Ensure full width */
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-right: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px; 
  border-radius: 6px;
  background-color: #f8f8f8; 
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  color: black;
  font-size: 14px;
  border: 1px solid #ccc; 
  border-radius: 4px 0 0 4px; 
  outline: none;
  margin-left: 10px;
  padding: 10px; 
  flex-grow: 1;
`;

const SearchButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 12px 20px;
  border: 1px solid #2ecc71; 
  border-radius: 0 4px 4px 0; 
  cursor: pointer;
  margin-left: -1px; 
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #27ae60; 
    }
`;

const MovieImage = styled.img`
  width: 55px;
  height: 48px;
  margin: 15px;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px;
  opacity: 50%;
`;

const Dashboard = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const navigate = useNavigate();

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => searchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  const searchData = async (searchString) => {
    try {
      const backendUrl = `${API_URL}/movies/search?search=${encodeURIComponent(searchString)}`;
      const response = await fetch(backendUrl);
      if (response.ok) {
        const data = await response.json();
        updateMovieList(data);
      } else {
        console.error('Error searching movie data:', response.statusText);
      }
    } catch (error) {
      console.error('Error searching movie data:', error);
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const onSearchButtonClick = () => {
    searchData(searchQuery);
  };

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const backendUrl = `${API_URL}/movies?search=${searchQuery}`;
        const response = await axios.get(backendUrl);

        if (response && response.data) {
          updateMovieList(response.data);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }

    fetchMovieData();
  }, [searchQuery]);

  return (
    <Container>
      <HeaderContainer>
        <AppName>
          <MovieImage src="logo12.jpg" alt="Movie Logo" />
          Frank's Movie Room
        </AppName>
        <Menu>
          <MenuItem>
            <Link to="/">
              <RegisterButton>Home</RegisterButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/View">
              <RegisterButton>About Us</RegisterButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <RegisterButton onClick={handleLogout}>Logout</RegisterButton>
          </MenuItem>
        </Menu>
      </HeaderContainer>
      
      <SearchBox>
        <SearchInput placeholder="Search Movie" value={searchQuery} onChange={onTextChange} />
        <SearchButton onClick={onSearchButtonClick}>Search</SearchButton>
      </SearchBox>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src="/react-movie-app/movie-icon.svg" />
         )}
      </MovieListContainer>
      <Footer />
    </Container>
  );
}

export default Dashboard;
