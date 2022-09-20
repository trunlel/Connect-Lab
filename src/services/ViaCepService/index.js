import { viaCepApi } from "..";

const getCep = (cep) => {
  return viaCepApi.get(`${cep}/json/`);
};

export default { getCep };
