import React from "react";
import "./Login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userSignIn } from "../../actions/supabase";

export default function Login() {
  const loginField = useSelector((state) => state.user.loginField);
  const loginPassword = useSelector((state) => state.user.loginPassword);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  const changeInputField = (e) => {
    dispatch({
      type: `SET_LOGIN_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
    });
  };
  //login function
  const signIn = async () => {
    let data = await userSignIn(loginField, loginPassword);
    console.log(data);
    dispatch({
      type: "SET_LOGGED_IN",
    });
    console.log(loggedIn);
  };

  // redirects to dashboard once logged in
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, [loggedIn]);

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <input
        value={loginField}
        name="email"
        type="email"
        onChange={changeInputField}
        placeholder="email"
      />
      <input
        value={loginPassword}
        name="password"
        type="password"
        onChange={changeInputField}
        placeholder="password"
      />
      <button onClick={signIn} className="submit">
        Login
      </button>
    </div>
  );
}
