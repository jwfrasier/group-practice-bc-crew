import styled, { css } from "styled-components";

export const HomeHeader = styled.h1`
  background-color: red;
  font-size: 20px;
`;

export const HomeButton = styled.button`
  /* font-size: 20px; */
  background-color: blue;

  background: palevioletred;
  color: white;
  font-size: ${(props) => props.fontSize}px;
`;

export const FlexContainer = styled.div`
  -webkit-transition: -webkit-transform 0.5s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
