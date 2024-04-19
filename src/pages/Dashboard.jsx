import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import MovieComponent from '../components/MovieComponent';
import MovieInfoComponent from '../components/MovieInfoComponent';
import { API_URL } from "../utils/constants";
import Footer from '../components/Footer';


const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 20px 60px; /* Adjusted padding */
  border-radius: 6px;
  margin-left: 20px;
  margin-right: auto; 
  background-color: white;
  margin-top: 10px; /* Added margin-top */
`;

const SearchButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 10px;
`;

const MovieImage = styled.img`
  width: 55px;
  height: 48px;
  margin: 15px;
`;

const SearchInput = styled.input`
 color: black;
 font-size: 14px;
 border: none;
 outline: none;
 margin-left: 10px;
 flex-grow: 1;
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
