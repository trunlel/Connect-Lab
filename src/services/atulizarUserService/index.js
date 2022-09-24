import { senaiApi } from "..";

const atualizaService = (data) => {
  const coverUser = localStorage.getItem("user");
  const ourArray = JSON.parse(coverUser);
  const idPerfil = ourArray._id;
  return senaiApi.put(`users/${idPerfil}`, data);
};

senaiApi.defaults.headers.common.Authorization =
  "Bearer " + localStorage.getItem("token");

export default { atualizaService };
