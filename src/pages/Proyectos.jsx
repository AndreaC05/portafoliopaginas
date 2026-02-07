import Navbar from "../components/Navbar";
import Fondo from "../assets/Fondo.png";
import "../style/Proyectos.css";

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Landing Page",
      imagen:
        "https://res.cloudinary.com/dnao6nouz/image/upload/v1770477003/Demo1_g7jlql.png",
      descripcion:
        "Landing page promocional con diseño claro, secciones informativas y formulario de contacto para presentar servicios o productos.",
      tecnologias: ["React", "HTML5", "CSS3", "JavaScript"],
      link: "https://tarjetadigitales.netlify.app/",
    },
    {
      id: 2,
      titulo: "Web Corporativa",
      imagen:
        "https://res.cloudinary.com/dnao6nouz/image/upload/v1770477513/Demo2_nrbe6g.png",
      descripcion:
        "Sitio web corporativo que presenta servicios profesionales de diseño web con secciones de portafolio y contacto.",
      tecnologias: ["React", "HTML5", "CSS3", "JavaScript"],
      link: "https://innovate-design.netlify.app/",
    },
    {
      id: 3,
      titulo: "Web Corporativa",
      imagen:
        "https://res.cloudinary.com/dnao6nouz/image/upload/v1770477514/Demo3_inwosv.png",
      descripcion:
        "Sitio web institucional para mostrar información de la marca o producto con diseño moderno y navegación clara.",
      tecnologias: ["React", "HTML5", "CSS3", "JavaScript"],
      link: "https://demoalthus.netlify.app/",
    },
    {
      id: 4,
      titulo: "Landing Page",
      imagen:
        "https://res.cloudinary.com/dnao6nouz/image/upload/v1770477513/Demo4_kgknhb.png",
      descripcion:
        "Landing page con estructura de presentación rápida orientada a captar atención e invitar a la acción del usuario.",
      tecnologias: ["React", "HTML5", "CSS3", "JavaScript"],
      link: "https://landingpagesdemo1.netlify.app/",
    },
    {
      id: 5,
      titulo: "Landing Page",
      imagen:
        "https://res.cloudinary.com/dnao6nouz/image/upload/v1770477512/Demo5_hazn9y.png",
      descripcion:
        "Portafolio web personal que muestra proyectos, habilidades y datos de contacto de forma visual y profesional.",
      tecnologias: ["React", "HTML5", "CSS3", "JavaScript"],
      link: "https://andrea-aguirre-portafolio.netlify.app/",
    },

    // {
    //   id: 6,
    //   titulo: "Fitness Tracker",
    //   imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    //   descripcion: "App para seguimiento de ejercicios y nutrición",
    //   tecnologias: ["React Native", "Firebase", "Redux", "Charts.js"],
    //   link: "https://github.com/tu-usuario/proyecto6"
    // }
  ];

  return (
    <>
      <Navbar />
      <div className="proyectos-page">
        {/* Fixed Background */}
        <img src={Fondo} alt="" className="proyectos-background" />

        {/* Scrollable Content */}
        <section className="proyectos-section">
          <div className="proyectos-container">
            <div className="proyectos-header">
              <h1 className="proyectos-title">Mis Proyectos</h1>
              <p className="proyectos-subtitle">
                Explora mi portafolio de proyectos desarrollados con las últimas
                tecnologías
              </p>
            </div>

            <div className="proyectos-grid">
              {proyectos.map((proyecto) => (
                <div key={proyecto.id} className="proyecto-card">
                  <div className="proyecto-image-container">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.titulo}
                      className="proyecto-image"
                    />
                    <div className="proyecto-overlay">
                      <a
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proyecto-link-button"
                      >
                        <i className="pi pi-external-link"></i>
                        Ver Proyecto
                      </a>
                    </div>
                  </div>

                  <div className="proyecto-content">
                    <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                    <p className="proyecto-descripcion">
                      {proyecto.descripcion}
                    </p>

                    <div className="proyecto-tecnologias">
                      {proyecto.tecnologias.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
