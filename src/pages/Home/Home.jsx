import { useContext, useEffect, useState } from "react";
import { CheckBoxButton } from "../../components/CheckBoxButton/CheckBoxButton";
import { DetailsModal } from "../../components/DetailsModal/DetailsModal";
import { Weather } from "../../components/Weather/Weather";
import { AuthContext } from "../../contexts/Auth";
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
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

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

  return (
    <Main>
      <DivWeather>
        <button onClick={handleLogout}>Logout</button>
        <Weather />
      </DivWeather>
      <DivSearch>
        <button>Casa</button>
        <button>Escritório</button>
        <button>Fábrica</button>
      </DivSearch>
      <Container>
        {devices.map((device) => (
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
