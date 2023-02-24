import React, { useState, createContext, useRef } from "react";
export const VdotokClientContext = createContext();

const VdotokClientContextProvider = (props) => {
  const { children } = props;
  const [vdotokClient, setVdotokClient] = useState({});
const vdotokClientRef = useRef(vdotokClient)
  return (
    <VdotokClientContext.Provider value={{ vdotokClient, setVdotokClient, vdotokClientRef }}>
      {children}
    </VdotokClientContext.Provider>
  );
};

export default VdotokClientContextProvider;
