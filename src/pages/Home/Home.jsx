import { useEffect, useState } from "react";
import { CheckBoxButton } from "../../components/CheckBoxButton/CheckBoxButton";
import { DetailsModal } from "../../components/DetailsModal/DetailsModal";
import { Weather } from "../../components/Weather/Weather";
import { buscarDeviceService } from "../../services";
import {
  Container,
  DivCard,
  DivSearch,
  DivWeather,
  HeaderModal,
  Main,
  ModalContainer,
} from "./Styled";

function Home() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    (async () => {
      const response = await buscarDeviceService();
      setDevices(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>Carregando dados</div>;
  }
  console.log(busca);
  console.log(devices);

  const devicesFilter = devices.filter((device) =>
    device.room.toString().includes(busca),
  );

  return (
    <Main>
      <DivWeather>
        <Weather />
      </DivWeather>
      <DivSearch>
        <button type="text" onClick={(e) => setBusca(e.target.value)} value="">
          Todos
        </button>
        <button
          type="text"
          onClick={(e) => setBusca(e.target.value)}
          value="Quarto"
        >
          Quarto
        </button>
        <button
          type="text"
          onClick={(e) => setBusca(e.target.value)}
          value="Sala"
        >
          Sala
        </button>
        <button
          type="text"
          onClick={(e) => setBusca(e.target.value)}
          value="Cozinha"
        >
          Cozinha
        </button>
      </DivSearch>
      <Container>
        {devicesFilter.map((device) => (
          <DivCard key={device._id}>
            <img src={device.device.photoUrl} alt="" />

            <div>
              <p>{device.device.name}</p>
            </div>
            <DetailsModal>
              <HeaderModal>
                <h1>{device.device.name}</h1>
              </HeaderModal>
              <ModalContainer>
                <h2>
                  <span>Tipo:</span> {device.device.type}
                </h2>
                <h2>
                  <span>Fabricante:</span> {device.device.madeBy}
                </h2>
                <h2>
                  <span>Estado:</span>
                  <CheckBoxButton />
                </h2>
              </ModalContainer>
              <hr />

              <HeaderModal>
                <h1>Informações do Dispositivo</h1>
              </HeaderModal>
              <ModalContainer>
                <h2>
                  <span>Local: </span>
                  {device.local.description}
                </h2>
                <h2>
                  <span>Sinal: </span>
                  {device.device.info.signal}
                </h2>
                <h2>
                  <span>MAC:</span>
                  {device.device.info.mac_address}
                </h2>
                <h2>
                  <span>IP:</span>
                  {device.device.info.ip}
                </h2>
              </ModalContainer>
            </DetailsModal>
          </DivCard>
        ))}
      </Container>
    </Main>
  );
}

export default Home;
