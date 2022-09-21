import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { Div } from "./Styled";

function Home() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <Div>
      <h1>Olá mundo</h1>
      <button onClick={handleLogout}>Logout</button>
    </Div>
  );
}

export default Home;
