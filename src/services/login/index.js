import API, { API_URL } from "../index";

export const login = async (reqBody) => {
  // console.log("login", { reqBody });
  return await API.post(API_URL.LOGIN(), reqBody);
};
