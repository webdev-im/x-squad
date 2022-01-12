import React from "react";
import styled from "styled-components";

// components
import SignupForm from "../components/molecules/SignupForm";

// style

const StyledSignupScreen = styled.main`
  height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignupScreen = () => {
  return (
    <StyledSignupScreen>
      <SignupForm />
    </StyledSignupScreen>
  );
};

export default SignupScreen;
