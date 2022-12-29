import API, { API_URL } from "../index";

export const createGroup = async (reqBody, cancelToken = false) => {
  // console.log('createGroup',{ reqBody, cancelToken });
  return await API.post(
    API_URL.CREATE_GROUP(),
    reqBody,
    cancelToken && { cancelToken: cancelToken.token }
  );
};

export const getGroups = async (reqBody, cancelToken = false) => {
  // console.log('getGroups',{ reqBody, cancelToken });
  return await API.post(
    API_URL.ALL_GROUPS(),
    reqBody,
    cancelToken && { cancelToken: cancelToken.token }
  );
};
