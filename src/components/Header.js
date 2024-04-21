import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const LogoText = styled.span`
  margin-left: 10px;
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

const SubMenu = styled.ul`
  position: absolute;
  background-color: #2ecc71;
  color: white;
  list-style-type: none;
  padding: 10px;
  border-radius: 5px;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const SubMenuItem = styled.li`
  margin-top: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;

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
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/dashboard">Search</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/">Contact</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/View">Join Us</Link>
        </MenuItem>
      </Menu>

      {showLogin ? (
        <button type="submit" onClick={() => setShowLogin(false)}>
          Register
        </button>
      ) : (
        <button onClick={() => setShowLogin(true)}>Login</button>
      )}
    </Container>
  );
};

export default Header;
