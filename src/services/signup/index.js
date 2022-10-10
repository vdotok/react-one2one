import API, { API_URL } from "../index";

export const signup = async (reqBody) => {
  // console.log("signup", { reqBody,  });
  return await API.post(API_URL.SIGNUP(), reqBody);
};
