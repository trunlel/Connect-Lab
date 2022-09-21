import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { CardDiv } from "../../components/Card/Styles";
import { CardModal } from "../../components/CardModal/CardModal";

import { devicesService } from "../../services";
import {
  Img,
  Input,
  MainContainer,
  SearchContainer,
  SearchText,
} from "./Styles";

const Register = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await devicesService();
      setDevices(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>Carregando dados</div>;
  }

  return (
    <MainContainer>
      <SearchContainer>
        <SearchText>Buscar</SearchText>
        <Input type="text" placeholder="Nome do dispositivo" />
      </SearchContainer>

      <CardDiv>
        {devices.map((device) => (
          <Card key={device._id}>
            <Img src={device.photoUrl} alt="" />
            <p>{device.name}</p>

            <CardModal></CardModal>
          </Card>
        ))}
      </CardDiv>
    </MainContainer>
  );
};

export default Register;

/* {devices.map((device) => (
            <li key={device._id}>{device.name}</li>
          ))} */

//   <CardDiv>
// {devices.map((device) => (
//   <Card key={device._id}>
//     <Img src={device.photoUrl} alt="" />
//     <p>{device.name}</p>
//   </Card>
// ))}
// </CardDiv>
