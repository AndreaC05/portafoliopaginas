import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import Fondo from "../assets/Fondo.png";
import Navbar from "../components/Navbar";
import "../style/Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [counters, setCounters] = useState({
    proyectos: 0,
    experiencia: 0,
    clientes: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Valores finales
  const finalValues = {
    proyectos: 50,
    experiencia: 3,
    clientes: 30
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 segundos
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Easing function

      setCounters({
        proyectos: Math.round(easeOutQuart * finalValues.proyectos),
        experiencia: Math.round(easeOutQuart * finalValues.experiencia),
        clientes: Math.round(easeOutQuart * finalValues.clientes)
      });

      if (frame === totalFrames) {
        clearInterval(counter);
        setCounters(finalValues); // Asegurar valores finales exactos
      }
    }, frameDuration);
  };

  return (
    <>
      <Navbar />
      <section className="home-banner" id="home">
        {/* Background image */}
        <img src={Fondo} className="banner-bg-image" alt="" />
        
        {/* Animated overlay elements - black and white only */}
        <div className="banner-bg">
          <div className="floating-cube cube-1"></div>
          <div className="floating-cube cube-2"></div>
          <div className="floating-cube cube-3"></div>
          <div className="floating-cube cube-4"></div>
          <div className="floating-cube cube-5"></div>
        </div>

        {/* Content */}
        <div className="banner-content">
          <h1 className="banner-title">
            Desarrollador <span className="title-highlight"> Full Stack</span>
            <br />
            Creando Experiencias Digitales
          </h1>

          <p className="banner-description">
            Especializado en crear aplicaciones web modernas, escalables y de
            alto rendimiento. Transformo ideas en soluciones digitales
            innovadoras.
          </p>

          <div className="banner-stats" ref={statsRef}>
            <div className="stat-item">
              <div className="stat-number">{counters.proyectos}+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{counters.experiencia}+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{counters.clientes}+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
          </div>

          <div className="banner-actions">
            <Button
              label="Ver Proyectos"
              icon="pi pi-arrow-right"
              iconPos="right"
              className="btn-primary"
              onClick={() => navigate('/projects')}
            />
            <Button
              label="Contáctame"
              icon="pi pi-send"
              className="btn-secondary"
              outlined
              onClick={() => navigate('/contact')}
            />
          </div>

          <div className="banner-tech-stack">
            <span className="tech-label">Tech Stack:</span>
            <div className="tech-icons">
              <div className="tech-icon" data-tech="React">
                <i className="pi pi-code"></i>
              </div>
              <div className="tech-icon" data-tech="Node.js">
                <i className="pi pi-server"></i>
              </div>
              <div className="tech-icon" data-tech="Database">
                <i className="pi pi-database"></i>
              </div>
              <div className="tech-icon" data-tech="Cloud">
                <i className="pi pi-cloud"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}