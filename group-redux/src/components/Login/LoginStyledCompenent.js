import styled from "styled-components";

export const LoginButton = styled.button`
  background-color: #4fa2d2;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  background-color: #4fa2d2;
`;

export const Input = styled.input`
  background-color: #f1efefe0;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 70%;
  border: 2px solid #f6f6f6;
`;

export const LoginContainer = styled.div`
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: 50px;
`;

export const SignUp = styled.div`
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
  font-size: 20px;
`;

export const BoldLink = styled.a`
  text-decoration: none;
  color: #0d0d0d;
  font-weight: bolder;
`;
