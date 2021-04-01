import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../_actions/userActions";
import { NavItem, NavLinks } from "../NavbarElements";

const navItems = [
  { 결제내역: "/history" },
  { 업로드: "/product/upload" },
  { 장바구니: "/user/cart" },
  { 로그아웃: "/logout" },
];

const LoggedIn = ({ history }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.logoutSuccess) {
        history.goBack(2);
      } else {
        alert("Log Out Failed");
      }
    });
  };
  return (
    <>
      {navItems.map((navItem) =>
        Object.entries(navItem).map(([key, value]) => (
          <NavItem key={key}>
            <NavLinks
              to={value}
              onClick={key === "로그아웃" ? logoutHandler : undefined}
              path={value === window.location.pathname ? 1 : 0}
            >
              {key}
            </NavLinks>
          </NavItem>
        ))
      )}
    </>
  );
};

export default withRouter(LoggedIn);
