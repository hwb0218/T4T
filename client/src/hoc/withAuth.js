import React, { useEffect } from "react";
import { auth } from "../_actions/userActions";
import { useSelector, useDispatch } from "react-redux";

const withAuth = (SpecificComponent, option, adminRoute = null) => {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          if (adminRoute && !response.payload.isSeller) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, [dispatch, props]);
    return <SpecificComponent {...props} user={user} />;
  }

  return AuthenticationCheck;
};

export default withAuth;
