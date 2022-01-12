import React from "react";
import styled from "styled-components";

// style
const StyledInput = styled.input`
  width: 10rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid gray;
  padding-left: 1rem;
`;

// interface

interface Props {
  id: string;
  onInput: any;
  placeholder: string;
  type: string;
  value: any;
}
const Input: React.FC<Props> = ({ id, onInput, placeholder, type, value }) => {
  return (
    <StyledInput
      id={id}
      onInput={onInput}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default Input;
