import { weatherApi } from "..";

const getWeather = (name) => {
  return weatherApi.get(
    `${name},BR&units=metric&lang=pt_br&appid=b229092288931ae8acde434cc5ae0ec1`,
  );
};

export default { getWeather };
