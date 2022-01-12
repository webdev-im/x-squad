import React from "react";
import styled from "styled-components";

// style
const StyledFooter = styled.footer`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>All rights reserved &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
