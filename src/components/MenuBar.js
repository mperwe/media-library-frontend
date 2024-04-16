import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 20px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #333;
  min-width: 160px;
  z-index: 1;
`;

const DropdownMenuItem = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const MenuItemWithDropdown = styled(MenuItem)`
  &:hover ${DropdownMenu} {
    display: block;
  }
`;

const MenuBar = () => {
  return (
    <MenuContainer>
      <div>
        <MenuItem href="/">Home</MenuItem>
        <MenuItemWithDropdown href="/dashboard">
          Movie List
          <DropdownMenu>
            <DropdownMenuItem href="/dashboard/popular">Popular Movies</DropdownMenuItem>
            <DropdownMenuItem href="/dashboard/top-rated">Top Rated Movies</DropdownMenuItem>
          </DropdownMenu>
        </MenuItemWithDropdown>
      </div>
      <div>
        <MenuItem href="/View">About Us</MenuItem>
        <MenuItem href="/contact">Contact</MenuItem>
        <MenuItem href="/View">Join Us</MenuItem>
      </div>
    </MenuContainer>
  );
};

export default MenuBar;
