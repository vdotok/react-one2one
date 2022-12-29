import React, { createContext, useReducer } from "react";
export const GroupContext = createContext();

const initialState = {
  allGroups: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_GROUPS":
      return { ...state, allGroups: action.payload, loading: false, error: "" };
    case "GET_GROUP_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const GroupContextProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GroupContext.Provider value={{ state, dispatch }}>
      {children}
    </GroupContext.Provider>
  );
};

export default GroupContextProvider;
