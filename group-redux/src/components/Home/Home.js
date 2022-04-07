import React, { useState } from "react";
import { HomeHeader, HomeButton, FlexContainer } from "./HomeStyledComponents";

export default function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  return (
    <FlexContainer>
      <HomeHeader>Home</HomeHeader>
      <HomeButton fontSize={40}>Log In</HomeButton>
    </FlexContainer>
  );
}
