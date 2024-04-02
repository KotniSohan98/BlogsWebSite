import axios from "axios";

const publicAxios = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://blogswebsite-api-server.onrender.com",
});

export default publicAxios;
