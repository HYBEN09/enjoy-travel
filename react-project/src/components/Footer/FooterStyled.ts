import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background: var(--blue-100);
  border-radius: 50px 50px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
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

  &:focus-visible {
    outline: 3px solid var(--white);
  }
`;
