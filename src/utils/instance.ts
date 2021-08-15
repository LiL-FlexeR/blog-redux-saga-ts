import axios from "axios";

const instance = axios.create({
  baseURL: "https://nodejs-test-api-blog.herokuapp.com/api/v1",
});

instance.interceptors.request.use((req) => {
  return req;
});

instance.interceptors.response.use((res) => {
  return res;
});

export default instance;
