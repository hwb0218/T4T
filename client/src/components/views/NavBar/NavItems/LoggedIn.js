import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../_actions/userActions";
import { NavItem, NavLinks } from "../NavbarElements";

const navItems = [
  { 주문정보: "/history" },
  { 장바구니: "/user/cart" },
  { 로그아웃: "/logout" },
];

const LoggedIn = ({ history, user }) => {
  console.log(user);
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
      {user.userData.isSeller && (
        <NavItem>
          <NavLinks
            to="/product/upload"
            path={"/product/upload" === window.location.pathname ? 1 : 0}
          >
            업로드
          </NavLinks>
        </NavItem>
      )}
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
