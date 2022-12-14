import { senaiApi } from "..";

const buscarDevices = async () => {
  const coverUser = localStorage.getItem("user");
  const ourArray = JSON.parse(coverUser);
  const idPerfil = ourArray._id;
  return senaiApi.get(`userDevices/user/${idPerfil}`);
};

export default buscarDevices;
