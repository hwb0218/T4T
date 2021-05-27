import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../_actions/userActions";
import { NavItem, NavLinks, Button } from "../NavbarElements";

const navItems = [{ 주문정보: "/history" }, { 장바구니: "/user/cart" }];

const LoggedIn = ({ history, location, user }) => {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      await dispatch(logoutUser());
      history.push("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {user.userData && user.userData.isSeller ? (
        <NavItem>
          <NavLinks
            to="/product/upload"
            path={"/product/upload" === window.location.pathname ? 1 : 0}
          >
            업로드
          </NavLinks>
        </NavItem>
      ) : null}
      {navItems.map((navItem) =>
        Object.entries(navItem).map(([key, value]) => (
          <NavItem key={key}>
            <NavLinks
              to={value}
              path={value === window.location.pathname ? 1 : 0}
            >
              {key}
            </NavLinks>
          </NavItem>
        ))
      )}
      <NavItem>
        <Button onClick={logoutHandler}>로그아웃</Button>
      </NavItem>
    </>
  );
};

export default withRouter(LoggedIn);
