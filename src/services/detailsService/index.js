import { senaiApi } from "..";

const getDetais = async () => {
  const coverUser = localStorage.getItem("user");
  const ourArray = JSON.parse(coverUser);
  const idPerfil = ourArray._id;
  return senaiApi.get(`users/${idPerfil}`);
};

export default getDetais;
