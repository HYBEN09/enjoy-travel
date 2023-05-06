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
import { auth } from '@/firebase/auth';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import mainLogo from '/public/assets/logo.png';
import { handleSignOut } from '@/utils/signOut';

export const Header: React.FC = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const handleLinkClick = () => {
    setIsMenuClicked(false); // 링크 클릭 시 메뉴 닫기
  };

  const user = auth.currentUser;

  const handlerSignOut = async () => {
    await handleSignOut(auth);
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <NavWrapper>
      <Nav>
        <NavLogo>
          <Link to="/">
            <img src={mainLogo} alt=" " />
          </Link>
        </NavLogo>
        <BurgerMenu onClick={updateMenu}>
          <BurgerBarTop clicked={isMenuClicked} />
          <BurgerBarMid clicked={isMenuClicked} />
          <BurgerBarBot clicked={isMenuClicked} />
        </BurgerMenu>
      </Nav>

      <Menu visible={isMenuClicked}>
        <MenuItem>
          <Link to="/" onClick={handleLinkClick}>
            HOME
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/review" onClick={handleLinkClick}>
            REVIEW
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/community" onClick={handleLinkClick}>
            COMMUNITY
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/news" onClick={handleLinkClick}>
            GLOBAL NEWS
          </Link>
        </MenuItem>
        {user ? (
          <MenuItem>
            <Link to="/" onClick={handlerSignOut}>
              LOGOUT
            </Link>
          </MenuItem>
        ) : (
          <>
            <MenuItem>
              <Link to="/signin" onClick={handleLinkClick}>
                SIGNIN
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup" onClick={handleLinkClick}>
                SIGNUP
              </Link>
            </MenuItem>
          </>
        )}
      </Menu>
    </NavWrapper>
  );
};
