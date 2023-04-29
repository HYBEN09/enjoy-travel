/* eslint-disable no-unused-vars */
import React, { forwardRef, Ref } from 'react';
import { InputForm } from './InputStyled';
type InputProps = {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  className?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const { type, placeholder, value, onChange, id, className, onKeyPress } =
      props;

    return (
      <InputForm
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        ref={ref}
        id={id}
        className={className}
        onKeyPress={onKeyPress}
      />
    );
  }
);

Input.displayName = 'Input';
