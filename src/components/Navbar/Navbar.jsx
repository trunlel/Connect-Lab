import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
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
          <Link to="/Register">Dispositivos</Link>
        </Li>
        <Li>
          <Link to="/Perfil"> Perfil</Link>
        </Li>
      </List>
    </Nav>
  );
};

export default Navbar;
