import { senaiApi } from "..";

const buscarDevice = (data) => {
  return senaiApi.post(`userDevices/user/:id`, data);
};

export default { buscarDevice };
