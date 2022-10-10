import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: gold; */
  height: calc(100vh - 200px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  .oops_text {
    color: #7269ef;
    font-size: 36px;
  }
  .msg_text {
    color: ${({ theme }) => theme.gray_700_color};
    font-size: 26px;
    margin: 30px 0 10px 0;
  }
  .des_text {
    color: ${({ theme }) => theme.gray_700_color};
    font-size: 14px;
  }
  .signup_anchor {
    text-decoration: none;
    border-radius: 30px;
    padding: 10px 16px;
    background-color: #7269ef;
    color: #fff;
    margin-top: 30px;
    font-weight: 500;
  }
`;

function EmptyUserContainer() {
  return (
    <Container>
      <h1 className="oops_text">Oops!!!</h1>
      <p className="msg_text">There are no users to display</p>
      <p className="des_text">Easily create users via the signup page</p>
      {/* <a
        className="signup_anchor"
        href="http://localhost:3000/signup"
        target="_blank"
      >
        Go To Signup
      </a> */}
    </Container>
  );
}

export default EmptyUserContainer;
