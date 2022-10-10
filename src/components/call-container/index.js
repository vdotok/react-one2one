import React from "react";
import styled from "styled-components";
import CallContent from "./call-content";

const Container = styled.div`
  /* background-color: gold; */
  width: 100%;
`;

function CallContainer() {
  return (
    <Container>
      <CallContent />
    </Container>
  );
}

export default CallContainer;
