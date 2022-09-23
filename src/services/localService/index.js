import { senaiApi } from "..";

const getLocals = async () => {
  return senaiApi.get(`locals`);
};

export default getLocals;
