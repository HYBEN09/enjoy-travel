/* eslint-disable jsx-a11y/anchor-is-valid */
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
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import mainLogo from '/public/logo.png';

export const Header: React.FC = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <NavWrapper>
      <Nav>
        <NavLogo>
          <a href="#">
            <img src={mainLogo} alt="구글" />
          </a>
        </NavLogo>
        <BurgerMenu onClick={updateMenu}>
          <BurgerBarTop clicked={isMenuClicked} />
          <BurgerBarMid clicked={isMenuClicked} />
          <BurgerBarBot clicked={isMenuClicked} />
        </BurgerMenu>
      </Nav>

      <Menu visible={isMenuClicked}>
        <MenuItem>
          <Link to="/"> HOME</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/review"> REVIEW</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/community"> COMMUNITY</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/news"> TRAVEL NEWS</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/signin"> SIGNIN</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/signup"> SIGNUP</Link>
        </MenuItem>
      </Menu>
    </NavWrapper>
  );
};
