import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999; 
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const LogoText = styled.span`
  margin-left: 8px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; 
  margin-right: 22px; 
`;

const MenuItem = styled.button`
  background-color: #2ecc71;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #27ae60;
  }
`;

const SubMenu = styled.ul`
  position: absolute;
  background-color: #2ecc71;
  color: white;
  list-style-type: none;
  padding: 10px;
  border-radius: 10px;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const SubMenuItem = styled.li`
  margin-top: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;

  &:hover {
    color: #fff;
  }
`;

const Header = ({ showLogin, setShowLogin }) => {
  const [movieListOpen, setMovieListOpen] = useState(false);

  const toggleMovieList = () => {
    setMovieListOpen(!movieListOpen);
  };

  return (
    <Container>
      <Logo>
        <img src="logo12.jpg" alt="Logo" width="40" height="40" />
        <LogoText>Frank's Movie Room</LogoText>
      </Logo>
      <Menu>
      <MenuItem>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={toggleMovieList}>
          <Link href="#movie-list">Movie List</Link>
          <SubMenu open={movieListOpen}>
            <SubMenuItem>
              <Link href="/Popular">Popular Movies</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link href="/Related">Top Related Movies</Link>
            </SubMenuItem>
          </SubMenu>
        </MenuItem>
       
        <MenuItem>
          <Link href="/dashboard">Search</Link>
        </MenuItem>
       
                {showLogin ? (
        <MenuItem onClick={() => setShowLogin(false)}>
          Register
        </MenuItem>
      ) : (
        <MenuItem onClick={() => setShowLogin(true)}>
        Login
      </MenuItem>
      )}
      </Menu>
    </Container>
  );
};

export default Header;