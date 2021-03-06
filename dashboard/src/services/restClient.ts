import axios from "axios";

let API_URL = "";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  API_URL = `http://127.0.0.1`;
}

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {},
    };
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 404) {
      console.log(404);
    }
    return Promise.reject(error);
  }
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
