import React, { useState, createContext } from "react";
export const VdotokClientContext = createContext();

const VdotokClientContextProvider = (props) => {
  const { children } = props;
  const [vdotokClient, setVdotokClient] = useState({});
  const [messageClient, setMessageClient] = useState({});

  return (
    <VdotokClientContext.Provider
      value={{ vdotokClient, setVdotokClient, messageClient, setMessageClient }}
    >
      {children}
    </VdotokClientContext.Provider>
  );
};

export default VdotokClientContextProvider;
