import { senaiApi } from "..";

const validarUser = async (email, password) => {
  return senaiApi.post(`auth/login`, { email, password });
};

export default validarUser;
