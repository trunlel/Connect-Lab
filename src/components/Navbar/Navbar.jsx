import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";
import logo from "../../image/logo.png";
import { IoIosLogOut } from "react-icons/io";

import { Nav, Img, List, Li, ButtonLogout, LogoDiv } from "./Styles";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogoDiv>
          <Img src={logo} alt="Logotico" />
          <h1>ConnectLab</h1>
        </LogoDiv>
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
        <li>
          <ButtonLogout onClick={handleLogout}>
            <IoIosLogOut />
          </ButtonLogout>
        </li>
      </List>
    </Nav>
  );
};

export default Navbar;
