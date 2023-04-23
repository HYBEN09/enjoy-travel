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
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, children, onClick }) => {
  const truncatedChildren =
    typeof children === 'string' && children.length > 55
      ? children.slice(0, 42) + '...'
      : children;

  return (
    <CardWrapper onClick={onClick}>
      <div>
        <Image src={imageUrl} alt="리뷰 사진" />
      </div>
      <CardContainer>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardContent>
          <p>{truncatedChildren}</p>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
