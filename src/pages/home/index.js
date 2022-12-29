import React from "react";
import SDKContextProvider from "context/sdk-client";
import UserContextProvider from "context/user";
import GroupContextProvider from "context/group";
import CallContextProvider from "context/call";
import Main from "components/main";
function Home() {
  return (
    <SDKContextProvider>
      <UserContextProvider>
        <GroupContextProvider>
          <CallContextProvider>
            <Main></Main>
          </CallContextProvider>
        </GroupContextProvider>
      </UserContextProvider>
    </SDKContextProvider>
  );
}

export default Home;
