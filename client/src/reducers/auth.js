import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return { authData: JSON.parse(localStorage.getItem("profile")) };
  }
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
