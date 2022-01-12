import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/organisms/Header";

// style
const StyledHomeScreen = styled.main`
  height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const HomeScreen = () => {
  // hooks
  // state

  const [user] = useState(() => {
    const saved: any = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  return (
    <>
      <StyledHomeScreen>
        <h1>Home page</h1>
        <div className="user">
          <p>Welcome</p>
          <h2>{user.username}</h2>
        </div>
      </StyledHomeScreen>
      <Header />
    </>
  );
};

export default HomeScreen;
