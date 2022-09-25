import axios from "axios";

const senaiApi = axios.create({
  baseURL: "https://connectlab.onrender.com/",
});

senaiApi.defaults.headers.common.Authorization =
  "Bearer " + localStorage.getItem("token");


export default senaiApi;
