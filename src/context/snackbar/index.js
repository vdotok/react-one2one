import React, { useState, createContext } from "react";
export const SnackbarContext = createContext({
  msg: "",
  type: "",
  isDisplayed: false,
  displayMsg: (msg, type) => {},
  onClose: () => {},
});
let timer;
const SnackbarContextProvider = (props) => {
  const { children } = props;
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  const displayHandler = (msg, type) => {
    setMsg(msg);
    setType(type);
    setIsDisplayed(true);
    timer = setTimeout(() => {
      closeHandler();
    }, 3000); // close snackbar after 3 seconds
  };
  const closeHandler = () => {
    clearTimeout(timer);
    setIsDisplayed(false);
  };
  return (
    <SnackbarContext.Provider
      value={{
        type,
        msg,
        isDisplayed,
        displayMsg: displayHandler,
        onClose: closeHandler,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
