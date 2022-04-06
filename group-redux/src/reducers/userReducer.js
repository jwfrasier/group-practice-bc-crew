import {
  SET_USER,
  SET_LOGIN_PASSWORD,
  SET_LOGIN_EMAIL,
} from "../action-types/index";
const initialState = {
  loginField: "",
  loginPassword: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return (state = { ...state, ...action.payload });
    case SET_LOGIN_EMAIL:
      return (state = { ...state, loginField: action.payload });
    case SET_LOGIN_PASSWORD:
      return (state = { ...state, loginPassword: action.payload });
    default:
      return state;
  }
};
export default user;
