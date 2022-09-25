import { senaiApi } from "..";

const deleteDevice = async (data) => {
  return senaiApi.delete(`userDevices/${data}`, data);
};

export default { deleteDevice };
