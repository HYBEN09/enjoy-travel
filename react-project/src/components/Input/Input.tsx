/* eslint-disable no-unused-vars */
import React, { forwardRef, Ref } from 'react';
import { InputForm } from './InputStyled';

type InputProps = {
  id?: string;
  type: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const { type, placeholder, value, onChange, id, className, onKeyPress } =
      props;

    return (
      <InputForm
        id={id}
        required
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
      />
    );
  }
);

Input.displayName = 'Input';
