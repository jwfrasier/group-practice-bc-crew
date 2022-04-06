import React from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const loginField = useSelector((state) => state.loginField);
  const loginPassword = useSelector((state) => state.loginPassword);
  const dispatch = useDispatch();
  const changeInputField = (e) => {
    dispatch({
      type: `SET_LOGIN_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
    });
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <input
        name="email"
        type="email"
        onChange={changeInputField}
        placeholder="email"
      />
      <input
        name="password"
        type="password"
        onChange={changeInputField}
        placeholder="password"
      />
      <button className="submit">Login</button>
    </div>
  );
}
