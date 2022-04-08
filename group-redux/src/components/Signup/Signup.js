import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSignIn, userSignOut } from "../../actions/supabase";
import { SET_LOGGED_IN } from "../../action-types";
import {
  LoginButton,
  Container,
  LoginContainer,
  Input,
  SignUp,
  BoldLink,
  Link,
  Dis,
} from "./SignupStyledComponent";

export default function Signup() {
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
  // updated
  //login
  // const login = async () => {
  //   let data = await userSignIn(loginField, loginPassword);
  //   if (data.status !== 400) {
  //     dispatch({
  //       type: SET_LOGGED_IN,
  //       payload: true,
  //     });
  //   } else {
  //     window.alert("Login failed. Try entering your information again.");
  //   }
  // };
  // //logout (not attached to anything yet)
  // const logout = async () => {
  //   userSignOut();
  //   dispatch({
  //     type: SET_LOGGED_IN,
  //     payload: false,
  //   });
  // };
  // // redirects when login status changes
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (loggedIn) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [loggedIn]);

  return (
    <Container>
      <LoginContainer>
        <h1>Don't miss another issue!</h1>
        <h2>Start you 14-day free trial of BCC now:</h2>
        <Input
          // value="text"
          // name="text"
          type="text"
          onChange={changeInputField}
          placeholder="name"
        />

        <Input
          value={loginField}
          name="email"
          type="email"
          onChange={changeInputField}
          placeholder="email"
        />

        {/* <LoginButton onClick={login} className="submit">
          Login
        </LoginButton> */}
        <SignUp>
          <BoldLink href="/signup">Get Started Now!*</BoldLink>
          <Dis>
            *BCC takes your privacy seriously and will never sell your
            information to a third party** **Unless we are offered a boatload of
            cash....
          </Dis>
        </SignUp>
      </LoginContainer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <a className="styledLink" href="https://www.miniaturemuseum.org/">
        ClickMe
      </a> */}
      <Link href="https://www.miniaturemuseum.org/">(clickme)</Link>
    </Container>
  );
}
