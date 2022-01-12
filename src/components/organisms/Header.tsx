import React, { useState } from "react";
import styled from "styled-components";
import LogoutButton from "../atoms/LogoutButton";

// images
import menu from "../../assets/images/close.svg";
import close from "../../assets/images/menu.svg";

// style
const StyledHeader = styled.header`
  height: 30rem;
  width: 20rem;
  top: 0;
  left: 0;
  position: absolute;
  border: 2px solid black;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nav__menu {
    left: -110%;
  }
  .nav__menu.active {
    left: 0;
  }
`;

const Header = () => {
  // hooks
  // state
  const [click, setClick] = useState(false);

  // custom functions
  const handleLogout = () => {
    localStorage.clear();
    window.history.pushState({}, "", "/");
  };

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <StyledHeader className={click ? "nav__menu active" : "nav__menu"}>
      <div className={click ? "main__container" : ""} onClick={() => Close()}>
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav__container">
            <div className="logo">
              <img
                src="https://media-exp1.licdn.com/dms/image/C510BAQGAKLzUw2jT-w/company-logo_200_200/0/1519904015246?e=1649894400&v=beta&t=8XyNixpVKRAC56Q7vjuIs3SQrgHHCMFw2MajUgb8DWo"
                alt=""
              />
            </div>
            <div>
              <a href="/">
                <LogoutButton
                  onClick={handleLogout}
                  text="Logout"
                  type="submit"
                />
              </a>
            </div>
            <div className="nav__icon" onClick={handleClick}>
              {click ? (
                <img src={close} alt="close" />
              ) : (
                <img src={menu} alt="menu" />
              )}
            </div>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
