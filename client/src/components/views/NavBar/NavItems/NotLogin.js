import React from "react";
import {
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  Button,
} from "../NavbarElements";

const NotLogin = () => {
  return (
    <>
      <NavItem>
        <NavLinks to="/login">로그인</NavLinks>
      </NavItem>
      <NavItemBtn>
        <NavBtnLink to="/register">
          <Button>회원가입</Button>
        </NavBtnLink>
      </NavItemBtn>
    </>
  );
};

export default NotLogin;
