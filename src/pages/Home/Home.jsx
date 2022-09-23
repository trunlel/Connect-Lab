import { useContext, useEffect, useState } from "react";
import { CheckBoxButton } from "../../components/CheckBoxButton/CheckBoxButton";
import { DetailsModal } from "../../components/DetailsModal/DetailsModal";
import { Weather } from "../../components/Weather/Weather";
import { AuthContext } from "../../contexts/Auth";
import { buscarDeviceService } from "../../services";
import { Container, DivCard, DivSearch, DivWeather, Main } from "./Styled";

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
              <h1>{device.device.name}</h1>
              <h2>Tipo: {device.device.type}</h2>
              <h2>Fabricante: {device.device.madeBy}</h2>
              <h2>
                Estado:
                <CheckBoxButton />
              </h2>
              <hr />
              <h1>Informações do Dispositivo</h1>
              <br />
              <h2>Local: {device.local.description}</h2>
              <h2>Sinal: {device.device.info.signal}</h2>
              <h2>MAC: {device.device.info.mac_address}</h2>
              <h2>IP: {device.device.info.ip}</h2>´
              
            </DetailsModal>
          </DivCard>
        ))}
      </Container>
    </Main>
  );
}

export default Home;
