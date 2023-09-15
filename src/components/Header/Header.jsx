import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import logo from "../../assets/imgs/logo.svg";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./Header.css";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="header">
      {sidebar && <Sidebar />}
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Vick." className="logo-img" />
          </Link>
        </div>
        <nav className="navbar">
          <button className="btn-menu">
            <IoMenuOutline className="menu-icon" onClick={showSidebar} />
          </button>
          <ul className="navbar-links">
            <li>
              <Link to="aboutme" className="link-header">
                sobre mim
              </Link>
            </li>
            <li>
              <Link to="projects" className="link-header">
                projetos
              </Link>
            </li>
            <li>
              <Link to="contact" className="link-header">
                contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
