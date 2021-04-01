import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoggedIn from "./NavItems/LoggedIn";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
} from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import NotLogin from "./NavItems/NotLogin";
import Modal from "./Modal/Modal";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setClick(!click);

  const openFilter = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <IconContext.Provider value={{ color: "#5f0080" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo href="/">Thanks For Traveling</NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            {user.userData && !user.userData.isAuth ? (
              <NotLogin />
            ) : (
              <LoggedIn />
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </IconContext.Provider>
  );
};

export default Navbar;
