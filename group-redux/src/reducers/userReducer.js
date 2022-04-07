import {
  SET_USER,
  SET_LOGIN_PASSWORD,
  SET_LOGIN_EMAIL,
  SET_LOGGED_IN,
} from "../action-types/index";
const initialState = {
  loginField: "",
  loginPassword: "",
  loggedIn: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return (state = { ...state, ...action.payload });
    case SET_LOGIN_EMAIL:
      return (state = { ...state, loginField: action.payload });
    case SET_LOGIN_PASSWORD:
      return (state = { ...state, loginPassword: action.payload });
    case SET_LOGGED_IN: {
      return (state = { ...state, loggedIn: true });
    }
    default:
      return state;
  }
};
export default user;
