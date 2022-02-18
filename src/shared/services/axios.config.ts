import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.3:3333",
  //baseURL: "http://192.168.0.103:3333",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const isToken = false;

    if (isToken) {
      config.headers!.Authorization = "Bearer " + isToken;
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
