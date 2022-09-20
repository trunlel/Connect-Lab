import { senaiApi } from "..";

const criarUsuario = (data) => {
  return senaiApi.post(`auth/register`, data);
};

export default { criarUsuario };
