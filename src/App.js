import React, { useContext, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "utils/theme.js";
import GlobalStyle from "globalStyles.js";
import Signin from "pages/signin/index.js";
import Signup from "pages/signup";
import Home from "pages/home/index.js";
import RequireAuth from "components/require-auth";
import { DarkModeContext } from "context/dark-mode";
function App() {
  console.log("hello aپپ");
  const { darkMode } = useContext(DarkModeContext);

  const selectTheme = useMemo(() => {
    if (darkMode) {
      return darkTheme;
    }
    return lightTheme;
  }, [darkMode]);

  return (
    <ThemeProvider theme={selectTheme}>
      <GlobalStyle />
      <Routes>
        {/* <Route index element={<Signin />} /> */}
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
