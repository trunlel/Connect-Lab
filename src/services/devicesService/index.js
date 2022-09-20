import { senaiApi } from "..";

const getDevices = async () => {
  return senaiApi.get(`devices`);
};

export default getDevices;
