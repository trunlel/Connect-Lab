import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CheckBoxButton } from "../../components/CheckBoxButton/CheckBoxButton";
import { DetailsModal } from "../../components/DetailsModal/DetailsModal";
import { Weather } from "../../components/Weather/Weather";
import { buscarDeviceService, deleteDeviceService } from "../../services";
import {
  Container,
  DeleteButton,
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

  const deletePost = (data) => {
    const createUserPromisse = deleteDeviceService.deleteDevice(data);
    toast.promise(createUserPromisse, {
      pending: "Deletando...",
      success: "Deletado com sucesso!",
      error: "Item invalido",
    });
    setTimeout(() => {
      window.location.reload(true);
    }, Math.floor(Math.random() * (5000 - 5000 + 1) + 1500));
  };

  if (loading) {
    return <div>Carregando dados</div>;
  }

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
                  {device.device.info.ip_address}
                </h2>

                <DeleteButton>
                  <button onClick={() => deletePost(device._id)}>
                    Deletar
                  </button>
                </DeleteButton>
              </ModalContainer>
            </DetailsModal>
          </DivCard>
        ))}
      </Container>
    </Main>
  );
}

export default Home;
