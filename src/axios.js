import axios from "axios";

const instance = axios.create({
  baseURL: "https://client-testing.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;

// http://127.0.0.1:8000
