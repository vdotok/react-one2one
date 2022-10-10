import React, { useState, createContext } from "react";
export const VdotokClientContext = createContext();

const VdotokClientContextProvider = (props) => {
  const { children } = props;
  const [vdotokClient, setVdotokClient] = useState({});

  return (
    <VdotokClientContext.Provider value={{ vdotokClient, setVdotokClient }}>
      {children}
    </VdotokClientContext.Provider>
  );
};

export default VdotokClientContextProvider;
