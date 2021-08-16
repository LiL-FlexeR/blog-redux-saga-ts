import axios from "axios";
import toast from "../components/Snackbar";

const instance = axios.create({
  baseURL: "https://nodejs-test-api-blog.herokuapp.com/api/v1",
});

instance.interceptors.request.use((req) => {
  return req;
});

instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      toast.success("Success!");
    }
    return res;
  },
  (err) => {
    if (err?.response.status === 400) {
      toast.toast(err?.response.statusText, "error");
    }
    if (err?.response.status === 401) {
      toast.toast(err?.response.statusText, "error");
    }
    if (err?.response.status === 403) {
      toast.toast(err?.response.statusText, "error");
    }
    if (err?.response.status === 404) {
      toast.toast(err?.response.statusText, "error");
    }
  }
);

export default instance;
