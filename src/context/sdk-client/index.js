import React, { useState, createContext } from "react";
export const SDKContext = createContext();

const SDKContextProvider = (props) => {
  const { children } = props;
  const [vdotokClient, setVdotokClient] = useState({});
  const [messageClient, setMessageClient] = useState({});

  return (
    <SDKContext.Provider
      value={{ vdotokClient, setVdotokClient, messageClient, setMessageClient }}
    >
      {children}
    </SDKContext.Provider>
  );
};

export default SDKContextProvider;
