import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "primereact/tooltip";
import "../style/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", icon: "pi pi-home", label: "Inicio", path: "/" },
    // { id: "about", icon: "pi pi-user", label: "Sobre Mí", path: "/about" },
    {
      id: "projects",
      icon: "pi pi-folder",
      label: "Proyectos",
      path: "/projects",
    },
    { id: "skills", icon: "pi pi-code", label: "Habilidades", path: "/skills" },
    {
      id: "contact",
      icon: "pi pi-envelope",
      label: "Contacto",
      path: "/contact",
    },
  ];

  return (
    <>
      <nav className="navbar-floating">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <i className="pi pi-box"></i>
          </div>
          <div className="logo-pulse"></div>
        </Link>

        <div className="navbar-divider"></div>

        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item.id} className="navbar-item">
              <Link
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setActiveItem(item.id)}
                data-pr-tooltip={item.label}
                data-pr-position="right"
              >
                <i className={item.icon}></i>
              </Link>
              <Tooltip target={`[data-pr-tooltip="${item.label}"]`} />
            </li>
          ))}
        </ul>

        <div className="navbar-divider"></div>

        <div className="navbar-social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            data-pr-tooltip="GitHub"
            data-pr-position="right"
          >
            <i className="pi pi-github"></i>
          </a>
          <Tooltip target=".social-link" />
        </div>
      </nav>
    </>
  );
}
