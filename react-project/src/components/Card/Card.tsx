import React, { ReactNode } from 'react';
import {
  CardContainer,
  CardContent,
  CardTitle,
  CardWrapper,
  Image,
} from './CardStyled';

export interface CardProps {
  children: ReactNode;
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, children }) => {
  return (
    <CardWrapper>
      <div>
        <Image src={imageUrl} alt="" />
      </div>
      <CardContainer>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardContent>
          <p>{children}</p>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
