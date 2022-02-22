import axios, { AxiosError } from "axios";

import { getToken } from "@helpers/auth";

const instance = axios.create({
  baseURL: "http://192.168.0.104:3333",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers!.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (error: AxiosError) {
    if (error.response) {
      const handleError = error.response;
      return Promise.reject(handleError);
    }
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  function (error: AxiosError) {
    const handleError = error.response?.data.message;
    return Promise.reject(handleError);
  }
);

export default instance;
