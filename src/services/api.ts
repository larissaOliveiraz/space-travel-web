import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.62:3333",
});

export { api };
