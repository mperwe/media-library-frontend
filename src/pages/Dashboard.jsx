import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MovieComponent from '../components/MovieComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;

`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 5px;
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
  
  background-color: white;
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
  margin-left: 1px;
`;

const RegisterButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const SearchButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 4px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 1px;
`;

const Dashboard = () => {
  const [searchQuery, updateSearchQuery] = useState('');
  const [movieList, updateMovieList] = useState([]);
  
  // eslint-disable-next-line
  const [selectedMovie, onMovieSelect] = useState();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const searchData = async (searchString) => {
    const backendUrl = 'http://localhost:4100/movies/';
    // eslint-disable-next-line
    const response = await axios.get(backendUrl);
    const mvlist = [
      {
        Title: 'test',
        Year: 2022,
        imdbID: 202,
        Type: 'horror',
        Poster: 'User',
      },
    ];
    updateMovieList(mvlist);
  };

  const onTextChange = (e) => {
    onMovieSelect('');
    updateSearchQuery(e.target.value);
    searchData(e.target.value);
  };

  const onSearchButtonClick = () => {
    searchData(searchQuery);
  };

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const backendUrl = `http://localhost:4100/movies?search=${searchQuery}`;
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
        <SearchBox>
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
          <SearchButton onClick={onSearchButtonClick}>Search</SearchButton>
        </SearchBox>
        <RegisterButton onClick={handleLogout}>Logout</RegisterButton>
      </HeaderContainer>
      <MovieContainer>
        {movieList.map((movie, idx) => (
          <MovieComponent key={idx} movie={movie} onMovieSelect={onMovieSelect} />
        ))}
      </MovieContainer>
    </Container>
  );
};

export default Dashboard;
