/* eslint-disable no-unused-vars */
import React, { forwardRef, Ref } from 'react';

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const { type, placeholder, value, onChange } = props;

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        ref={ref}
      />
    );
  }
);

Input.displayName = 'Input';
