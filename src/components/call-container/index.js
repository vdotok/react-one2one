import React from "react";
import styled from "styled-components";
import CallContent from "./call-content";

const Container = styled.div`
  /* background-color: gold; */
  width: 100%;
`;

function CallContainer({isP2PCall}) {
  return (
    <Container>
      <CallContent isP2PCall={isP2PCall} />
    </Container>
  );
}

export default CallContainer;
