import {
  LOGIN_USER,
  AUTH_USER,
  REGISTER_USER,
  LOGOUT_USER,
} from "../_actions/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    default:
      return state;
  }
};

export default userReducer;
