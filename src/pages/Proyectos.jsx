import Navbar from "../components/Navbar";
import Fondo from "../assets/Fondo.png";
import "../style/Proyectos.css";

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "E-Commerce Platform",
      imagen: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      descripcion: "Plataforma de comercio electrónico con React y Node.js",
      tecnologias: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/tu-usuario/proyecto1"
    },
    {
      id: 2,
      titulo: "Dashboard Analytics",
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      descripcion: "Dashboard interactivo para análisis de datos en tiempo real",
      tecnologias: ["React", "D3.js", "Firebase", "TypeScript"],
      link: "https://github.com/tu-usuario/proyecto2"
    },
    {
      id: 3,
      titulo: "Task Management App",
      imagen: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
      descripcion: "Aplicación de gestión de tareas con funcionalidades avanzadas",
      tecnologias: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
      link: "https://github.com/tu-usuario/proyecto3"
    },
    {
      id: 4,
      titulo: "Social Media Platform",
      imagen: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      descripcion: "Red social con chat en tiempo real y sistema de notificaciones",
      tecnologias: ["React", "Socket.io", "Express", "Redis"],
      link: "https://github.com/tu-usuario/proyecto4"
    },
    {
      id: 5,
      titulo: "AI Content Generator",
      imagen: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      descripcion: "Generador de contenido impulsado por IA",
      tecnologias: ["React", "OpenAI API", "Node.js", "MongoDB"],
      link: "https://github.com/tu-usuario/proyecto5"
    },
    {
      id: 6,
      titulo: "Fitness Tracker",
      imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      descripcion: "App para seguimiento de ejercicios y nutrición",
      tecnologias: ["React Native", "Firebase", "Redux", "Charts.js"],
      link: "https://github.com/tu-usuario/proyecto6"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="proyectos-page">
        {/* Fixed Background */}
        <img src={Fondo} alt="" className="proyectos-background"/>

        {/* Scrollable Content */}
        <section className="proyectos-section">
          <div className="proyectos-container">
            <div className="proyectos-header">
              <h1 className="proyectos-title">Mis Proyectos</h1>
              <p className="proyectos-subtitle">
                Explora mi portafolio de proyectos desarrollados con las últimas tecnologías
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
                    <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                    
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