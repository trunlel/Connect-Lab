import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/Auth";
import { devicesService } from "../../services";
import { Container, MainContainer } from "./Styles";

const Home = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await devicesService();
      setDevices(response.data);
      setLoading(false);
    })();
  }, []);

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return <div>Carregando dados</div>;
  }

  return (
    <MainContainer>
      <Container>
        <h1>Olá mundo</h1>
        <button onClick={handleLogout}>Logout</button>
        <ul>
          {devices.map((device) => (
            <li key={device._id}>{device.name}</li>
          ))}
        </ul>
      </Container>
    </MainContainer>
  );
};

export default Home;
