import axios from "axios";

const weatherApi = axios.create({
  baseURL:
    "https://api.openweathermap.org/?q=",
});

export default weatherApi;
