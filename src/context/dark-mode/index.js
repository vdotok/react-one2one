import React, { useState, createContext } from "react";
export const DarkModeContext = createContext();

const DarkModeContextProvider = (props) => {
  const { children } = props;
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
