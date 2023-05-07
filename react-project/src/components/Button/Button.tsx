/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';
import { ButtonWrapper } from './ButtonStyled';

export interface ButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  type?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  type = 'button',
  ...props
}: ButtonProps) => (
  <ButtonWrapper style={{ backgroundColor }} {...props}>
    {children}
  </ButtonWrapper>
);

export default Button;
