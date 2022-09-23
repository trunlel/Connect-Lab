import { senaiApi } from "..";

const cadastrarDevice = (data) => {
  return senaiApi.post(`userDevices`, data);
};

export default { cadastrarDevice };
