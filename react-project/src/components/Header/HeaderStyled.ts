import styled, { keyframes } from 'styled-components';

interface BurgerBarProps {
  clicked: boolean;
}

interface MenuProps {
  visible: boolean;
}

// @keyframes 정의
const slideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: -900px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
  margin-bottom: 3rem;
`;

export const NavLogo = styled.h1`
  text-align: left;
  margin-right: auto;
  font-size: 45px;
`;

// BurgerMenu --------------------------------------------
export const BurgerMenu = styled.div`
  height: 80%;
  width: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10;
`;

export const BurgerBarTop = styled.div<BurgerBarProps>`
  width: 2.5rem;
  height: 0.4rem;
  background-color: var(--purple-700);
  border-radius: 0.4rem;
  transform: ${({ clicked }) =>
    clicked
      ? 'rotate(48deg) translate(-0.1rem, 0.7rem)'
      : 'rotate(0) translate(0)'};
  transition: ${({ clicked }) =>
    clicked ? 'ease-out 0.3s' : 'cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s'};
  margin-top: 0.1rem;
`;

export const BurgerBarMid = styled.div<BurgerBarProps>`
  width: 2.5rem;
  height: 0.4rem;
  background-color: var(--purple-700);
  margin-top: 0.1rem;
  border-radius: 0.4rem;
  opacity: ${({ clicked }) => (clicked ? 0 : 1)};
  transition: opacity 0.3s;
`;

export const BurgerBarBot = styled.div<BurgerBarProps>`
  width: 2.5rem;
  height: 0.4rem;
  background-color: var(--purple-700);
  margin-top: 0.1rem;
  border-radius: 0.4rem;
  transform: ${({ clicked }) =>
    clicked
      ? 'rotate(-50deg) translate(0.7em, -1.4em)'
      : 'rotate(0) translate(0)'};
  transition: ${({ clicked }) =>
    clicked ? 'ease-out 0.3s' : 'cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s'};
  margin-bottom: 0.2rem;
`;

// SlideMenu --------------------------------------------
export const Menu = styled.div<MenuProps>`
  position: absolute;
  width: 80%;
  height: 100vh;
  background-color: var(--blue-200);
  top: 0;
  right: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideIn} 0.3s ease-out;
`;

export const MenuItem = styled.a`
  display: block;
  padding: 1rem;
  color: #fff;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: var(--secondary);
  }
`;
