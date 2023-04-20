import React, { ReactNode } from 'react';
import { CardWrapper } from './CardStyled';

export interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <CardWrapper>{children}</CardWrapper>
);

export default Card;
