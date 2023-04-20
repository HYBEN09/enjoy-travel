import React, { ReactNode } from 'react';
import { CardWrapper } from './CardStyled';

export interface CardProps {
  children: ReactNode;
  backgroundColor: string;
}

const Card: React.FC<CardProps> = ({ children, backgroundColor }) => (
  <CardWrapper style={{ backgroundColor }}>{children}</CardWrapper>
);

export default Card;
