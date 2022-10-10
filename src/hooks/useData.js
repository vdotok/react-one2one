import { useReducer } from "react";

const initialState = (initialValue) => {
  return {
    loading: true,
    data: initialValue,
    error: "",
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: true };
    case "GET_DATA":
      return { ...state, data: action.payload, loading: false, error: "" };
    case "GET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const useData = (initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState(initialValue));

  const startLoading = () => {
    dispatch({
      type: "START_LOADING",
    });
  };

  const getData = (payload) => {
    dispatch({
      type: "GET_DATA",
      payload,
    });
  };

  const getError = (payload) => {
    dispatch({
      type: "GET_ERROR",
      payload,
    });
  };

  return { state, startLoading, getData, getError };
};
