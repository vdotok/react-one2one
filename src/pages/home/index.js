import React from "react";
import Main from "components/main";
import VdotokClientContextProvider from "context/vdotok-client";
import UserContextProvider from "context/user";
import CallContextProvider from "context/call";
function Home() {
  return (
    <VdotokClientContextProvider>
      <UserContextProvider>
        <CallContextProvider>
          <Main></Main>
        </CallContextProvider>
      </UserContextProvider>
    </VdotokClientContextProvider>
  );
}

export default Home;
