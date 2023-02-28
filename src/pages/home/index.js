import React from "react";
import Main from "components/main";
import VdotokClientContextProvider from "context/vdotok-client";
import UserContextProvider from "context/user";
import CallContextProvider from "context/call";
import SnackbarContextProvider from "context/snackbar";
function Home() {
  return (
    <VdotokClientContextProvider>
      <UserContextProvider>
        <CallContextProvider>
          <SnackbarContextProvider>
            <Main></Main>
          </SnackbarContextProvider>
        </CallContextProvider>
      </UserContextProvider>
    </VdotokClientContextProvider>
  );
}

export default Home;
