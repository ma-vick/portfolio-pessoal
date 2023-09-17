import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function Sidebar() {
  const {setSidebar} = useContext(AppContext);

  return (
    <nav className="nav-sidebar">
      <ul className="list-sidebar">
        <li>
          <NavLink
            to="/"
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              isActive ? "link-header-list selected" : "link-header-list"
            }
          >
            sobre mim
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              isActive ? "link-header-list selected" : "link-header-list"
            }
          >
            projetos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              isActive ? "link-header-list selected" : "link-header-list"
            }
          >
            contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
