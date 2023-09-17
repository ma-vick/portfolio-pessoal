import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import logo from "../../assets/imgs/logo.svg";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./Header.css";
import AppContext from "../../context/AppContext";

export default function Header() {
  const { sidebar, setSidebar } = useContext(AppContext);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="header">
      {sidebar && <Sidebar />}
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Vick." className="logo-img" />
          </NavLink>
        </div>
        <nav className="navbar">
          <button className="btn-menu">
            <IoMenuOutline className="menu-icon" onClick={showSidebar} />
          </button>
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link-header selected" : "link-header"
                }
              >
                sobre mim
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  isActive ? "link-header selected" : "link-header"
                }
              >
                projetos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "link-header selected" : "link-header"
                }
              >
                contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
