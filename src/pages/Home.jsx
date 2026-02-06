import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import Fondo from "../assets/Fondo.png";
import Navbar from "../components/Navbar";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="home-banner" id="home">
        {/* Background image */}
        <img className="banner-bg-image" src={Fondo} alt="" />
        {/* <div className="banner-bg-image" style={{ backgroundImage: `url(${Fondo})` }}></div> */}
        
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

          <div className="banner-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
          </div>

          <div className="banner-actions">
            <Button
              label="Ver Proyectos"
              icon="pi pi-arrow-right"
              iconPos="right"
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Button
              label="Contáctame"
              icon="pi pi-send"
              className="btn-secondary"
              outlined
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
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