import axios from "axios";
import { BASE_URL } from "constants";

const axiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    responseType: "json",
  });
};

export const API_URL = Object.freeze({
  SIGNUP: () => "SignUp",
  LOGIN: () => "Login",
  ALL_USERS: () => "AllUsers",
});

const API = axiosInstance();
export default API;

// export const services = {
//   endpoint(url) {
//     url = BASE_URL + url; //concat base url and url with base api endpoint
//     return {
//       getOne: (id) => axios.get(url + `/${id}`), //id_url
//       getAll: () => axios.get(url),
//       abc: (data) => {
//         console.log({ url, data });
//       },
//       post: (data) => axios.post(url, data), //url, data
//       create: (data) => axios.post(url, data), //url, data
//       update: (id, data) => axios.put(url + `/${id}`, data), //url, data
//       delete: (id) => axios.delete(url + `/${id}`), //id_url
//     };
//   },
// };
