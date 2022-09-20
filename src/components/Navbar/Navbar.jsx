import { Link } from "react-router-dom";
import logo from "../../image/logo.png";

import { Nav, Img, List, Li } from "./Styles";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Img src={logo} alt="Logotico" />
      </Link>
      <List>
        <Li>
          <Link to="/">Inicio</Link>
        </Li>
        <Li>
          <Link to="/Register">Cadastrar</Link>
        </Li>
        <Li>
          <Link to="/Perfil"> Perfil</Link>
        </Li>
      </List>
    </Nav>
  );
};

export default Navbar;
