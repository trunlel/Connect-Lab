import axios from "axios";

const senaiApi = axios.create({
  baseURL: "https://connectlab.onrender.com/",
});

senaiApi.defaults.headers.common.Authorization =
  "Bearer " + localStorage.getItem("token");

// console.log(localStorage.getState());

export default senaiApi;
