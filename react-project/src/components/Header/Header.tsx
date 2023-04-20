import {
  BurgerBarBot,
  BurgerBarMid,
  BurgerBarTop,
  BurgerMenu,
  Menu,
  MenuItem,
  Nav,
  NavLogo,
  NavWrapper,
} from './HeaderStyled';
import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <NavWrapper>
      <Nav>
        <NavLogo>Travel</NavLogo>
        <BurgerMenu onClick={updateMenu}>
          <BurgerBarTop clicked={isMenuClicked} />
          <BurgerBarMid clicked={isMenuClicked} />
          <BurgerBarBot clicked={isMenuClicked} />
        </BurgerMenu>
      </Nav>

      <Menu visible={isMenuClicked}>
        <MenuItem href="#">HOME</MenuItem>
        <MenuItem href="#">REVIEW</MenuItem>
        <MenuItem href="#">COMMUNITY</MenuItem>
        <MenuItem href="#">TRAVEL NEWS</MenuItem>
        <MenuItem href="#">SIGNIN</MenuItem>
        <MenuItem href="#SIGNUP">SIGNUP</MenuItem>
      </Menu>
    </NavWrapper>
  );
};
