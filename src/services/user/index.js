import API, { API_URL } from "../index";

export const getUsers = async (reqBody, cancelToken = false) => {
  // console.log('getUsers',{ reqBody, cancelToken });
  return await API.post(
    API_URL.ALL_USERS(),
    reqBody,
    cancelToken && { cancelToken: cancelToken.token }
  );
};
