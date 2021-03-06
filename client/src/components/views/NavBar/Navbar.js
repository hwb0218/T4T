import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoggedIn from "./NavItems/LoggedIn";
import NotLogin from "./NavItems/NotLogin";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
} from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeNavbar = () => {
    setClick(false);
  };

  return (
    <IconContext.Provider value={{ color: "#5f0080" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Thanks For Traveling</NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={closeNavbar} click={click}>
            {user.userData && user.userData.isAuth ? (
              <LoggedIn user={user} />
            ) : (
              <NotLogin />
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
