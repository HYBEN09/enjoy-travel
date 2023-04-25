import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: var(--blue-100);
  border-radius: 50px 50px 0 0;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: fixed;
  bottom: 0;
`;

export const FooterButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: var(--primary);
  border-radius: 50%;
  color: var(--white);
  font-size: 22px;
  text-align: center;

  &:hover {
    background-color: var(--blue-700);
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(90%);
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  z-index: 9999;
`;
