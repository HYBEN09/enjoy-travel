import React, { ReactNode } from 'react';
import { ButtonWrapper } from './ButtonStyled';

export interface ButtonProps {
  children: ReactNode;
  backgroundColor: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  ...props
}: ButtonProps) => (
  <ButtonWrapper style={{ backgroundColor }} {...props}>
    {children}
  </ButtonWrapper>
);

export default Button;
