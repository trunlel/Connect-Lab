import { senaiApi } from "..";

const buscarDevices = async () => {
  return senaiApi.get(`userDevices/user/${idPerfil}`);
};

const coverUser = localStorage.getItem("user");
const ourArray = JSON.parse(coverUser);
const idPerfil = ourArray._id;

export default buscarDevices;
