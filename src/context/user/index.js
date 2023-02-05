import React, { createContext, useReducer, useRef } from "react";
export const UserContext = createContext();

const initialState = {
  selectedUser: {},
  getUser: {},
  selectedChat: {},
  loading: true,
  error: "",
  usersList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_USER":
      return {
        ...state,
        selectedChat: action.payload,
        selectedUser: action.payload["participants"][0],
      };
    case "GET_USER":
      return { ...state, getUser: action.payload };
    case "GET_USERS_LIST":
      return { ...state, usersList: action.payload, loading: false, error: "" };
    case "GET_USER_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const UserContextProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const usersListRef = useRef(state.usersList);
  return (
    <UserContext.Provider value={{ state, dispatch, usersListRef }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
