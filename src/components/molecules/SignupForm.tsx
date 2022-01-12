import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// components
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import SignupButton from "../atoms/SignupButton";

// style

const StyledSignupForm = styled.form`
  height: 20rem;
  width: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 2%;
  .single__input {
    height: 30%;
    display: flex;
    flex-direction: column;
  }
`;

// endpoint
const USERS_ENDPOINT = "http://jsonplaceholder.typicode.com/users";

const SignupForm = () => {
  // hooks
  // state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // creating new user
  const newUser = {
    username: username,
    password: password,
  };

  // custom functions
  const signupNewUser = async (e: any) => {
    e.preventDefault();

    // sending new user

    await axios
      .post(USERS_ENDPOINT, newUser)
      .then((res) => {
        setUsername(username);
        setPassword(password);
        localStorage.setItem("user", JSON.stringify(newUser));
      })
      .catch((err) => console.log(err));
    setUsername("");
    setPassword("");
    window.history.pushState({}, "", "/home");
    window.location.reload();
  };

  return (
    <StyledSignupForm onSubmit={signupNewUser}>
      <div className="single__input">
        <Label label="Username" />
        <Input
          id="username"
          onInput={(e: any) => setUsername(e.target.value)}
          placeholder="Enter your username..."
          type="text"
          value={username}
        />
      </div>
      <div className="single__input">
        <Label label="Password" />
        <Input
          id="password"
          onInput={(e: any) => setPassword(e.target.value)}
          placeholder="Enter your password..."
          type="password"
          value={password}
        />
      </div>
      <SignupButton
        onClick={() => console.log("Signup")}
        text="Sign up"
        type="submit"
      />
    </StyledSignupForm>
  );
};

export default SignupForm;
