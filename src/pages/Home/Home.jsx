import { useContext } from "react";
import { Weather } from "../../components/Weather/Weather";
import { AuthContext } from "../../contexts/Auth";
import { Main } from "./Styled";

function Home() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <Main>
      <button onClick={handleLogout}>Logout</button>
      <Weather />
    </Main>
  );
}

export default Home;
