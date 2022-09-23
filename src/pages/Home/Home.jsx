import { useContext } from "react";
import { Weather } from "../../components/Weather/Weather";
import { AuthContext } from "../../contexts/Auth";
import { Container, DivCard, DivSearch, DivWeather, Main } from "./Styled";

function Home() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

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
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
        <DivCard>Olá</DivCard>
      </Container>
    </Main>
  );
}

export default Home;
