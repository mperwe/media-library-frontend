import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const MenuBar = () => {
  return (
    <MenuContainer>
      <MenuItem href="/">Home</MenuItem> |
      <MenuItem href="/dashboard">Movie List</MenuItem> |
      <MenuItem href="/view">Join Us</MenuItem> 
     
    </MenuContainer>
  );
};

export default MenuBar;
