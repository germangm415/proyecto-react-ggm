import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const Menu = () => {
  //const navigation = useNavigate()
  const usuario = useContext(UserContext)

  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/criptomonedas">Criptomonedas</NavLink>
        </li>
        <li>
          <NavLink to="/perfil">Perfil de {usuario.name} </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
