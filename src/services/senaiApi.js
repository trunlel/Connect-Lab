import axios from "axios";

const senaiApi = axios.create({
  baseURL: "https://connectlab.onrender.com/",
});

export default senaiApi;
