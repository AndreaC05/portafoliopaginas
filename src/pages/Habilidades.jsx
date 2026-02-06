import "../style/Habilidades.css";
import Navbar from "../components/Navbar";
import Fondo from "../assets/Fondo.png";

export default function Habilidades() {
  const habilidades = {
    frontend: [
      { nombre: "React.js", nivel: 90, icono: "pi pi-code", color: "#61DAFB" },
      { nombre: "HTML5", nivel: 95, icono: "pi pi-file", color: "#E34F26" },
      { nombre: "CSS3", nivel: 90, icono: "pi pi-palette", color: "#1572B6" },
      {
        nombre: "JavaScript",
        nivel: 85,
        icono: "pi pi-bolt",
        color: "#F7DF1E",
      },
    ],
    backend: [
      { nombre: "Node.js", nivel: 85, icono: "pi pi-server", color: "#339933" },
      {
        nombre: "Express.js",
        nivel: 80,
        icono: "pi pi-sitemap",
        color: "#000000",
      },
    ],
    database: [
      { nombre: "MySQL", nivel: 85, icono: "pi pi-database", color: "#4479A1" },
    //   { nombre: "MongoDB", nivel: 75, icono: "pi pi-cloud", color: "#47A248" },
    ],
    tools: [
      { nombre: "Git", nivel: 80, icono: "pi pi-github", color: "#F05032" },
      { nombre: "VS Code", nivel: 90, icono: "pi pi-code", color: "#007ACC" },
      { nombre: "Postman", nivel: 75, icono: "pi pi-send", color: "#FF6C37" },
    ],
  };

  const categorias = [
    {
      key: "frontend",
      titulo: "Frontend",
      icono: "pi pi-desktop",
      descripcion: "Desarrollo de interfaces de usuario",
    },
    {
      key: "backend",
      titulo: "Backend",
      icono: "pi pi-server",
      descripcion: "Desarrollo del lado del servidor",
    },
    {
      key: "database",
      titulo: "Bases de Datos",
      icono: "pi pi-database",
      descripcion: "Gestión y modelado de datos",
    },
    {
      key: "tools",
      titulo: "Herramientas",
      icono: "pi pi-wrench",
      descripcion: "Herramientas de desarrollo",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="habilidades-page">
        {/* Fixed Background */}
        <img src={Fondo} alt="" className="habilidades-background"/>

        {/* Scrollable Content */}
        <section className="habilidades-section">
          <div className="habilidades-container">
            {/* Header */}
            <div className="habilidades-header">
              <h1 className="habilidades-title">Mis Habilidades</h1>
              <p className="habilidades-subtitle">
                Tecnologías y herramientas que domino para crear soluciones
                digitales completas
              </p>
            </div>

            {/* Stats Overview */}
            <div className="habilidades-stats">
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="pi pi-code"></i>
                </div>
                <div className="stat-info">
                  <h3>10+</h3>
                  <p>Tecnologías</p>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="pi pi-clock"></i>
                </div>
                <div className="stat-info">
                  <h3>5+</h3>
                  <p>Años de Experiencia</p>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">
                  <i className="pi pi-check-circle"></i>
                </div>
                <div className="stat-info">
                  <h3>50+</h3>
                  <p>Proyectos Completados</p>
                </div>
              </div>
            </div>

            {/* Skills Categories */}
            <div className="categorias-grid">
              {categorias.map((categoria) => (
                <div key={categoria.key} className="categoria-card">
                  <div className="categoria-header">
                    <div className="categoria-icon">
                      <i className={categoria.icono}></i>
                    </div>
                    <div className="categoria-info">
                      <h3 className="categoria-titulo">{categoria.titulo}</h3>
                      <p className="categoria-descripcion">
                        {categoria.descripcion}
                      </p>
                    </div>
                  </div>

                  <div className="skills-list">
                    {habilidades[categoria.key].map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-header">
                          <div className="skill-name">
                            <i className={skill.icono}></i>
                            <span>{skill.nombre}</span>
                          </div>
                          <span className="skill-percentage">
                            {skill.nivel}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: `${skill.nivel}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="habilidades-footer">
              <div className="footer-card">
                <i className="pi pi-star-fill"></i>
                <h3>Aprendizaje Continuo</h3>
                <p>
                  Siempre actualizándome con las últimas tecnologías y mejores
                  prácticas del desarrollo web
                </p>
              </div>
              <div className="footer-card">
                <i className="pi pi-users"></i>
                <h3>Trabajo en Equipo</h3>
                <p>
                  Experiencia colaborando en equipos ágiles y usando
                  metodologías como Scrum
                </p>
              </div>
              <div className="footer-card">
                <i className="pi pi-shield"></i>
                <h3>Código Limpio</h3>
                <p>
                  Enfoque en escribir código mantenible, escalable y siguiendo
                  las mejores prácticas
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
