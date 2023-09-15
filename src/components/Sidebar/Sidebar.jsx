import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <nav className="nav-sidebar">
      <ul className="list-sidebar">
        <li>
          <Link className="link-header">sobre mim</Link>
        </li>
        <li>
          <Link className="link-header">projetos</Link>
        </li>
        <li>
          <Link className="link-header">contato</Link>
        </li>
      </ul>
    </nav>
  );
}
