import React from "react";
import styled from "styled-components";

// style
const StyledSignupButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: #f0f0f0;
  border-radius: 2%;
`;

// interface
interface Props {
  onClick: any;
  text: string;
  type: any;
}

const SignupButton: React.FC<Props> = ({ onClick, text, type }) => {
  return (
    <StyledSignupButton onClick={onClick} type={type}>
      {text}
    </StyledSignupButton>
  );
};

export default SignupButton;
