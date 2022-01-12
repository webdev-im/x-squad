import React from "react";
import styled from "styled-components";

// style
const StyledLogoutButton = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
`;

// interface
interface Props {
  onClick: any;
  text: string;
  type: any;
}

const LogoutButton: React.FC<Props> = ({ onClick, text, type }) => {
  return (
    <StyledLogoutButton onClick={onClick} type={type}>
      {text}
    </StyledLogoutButton>
  );
};

export default LogoutButton;
