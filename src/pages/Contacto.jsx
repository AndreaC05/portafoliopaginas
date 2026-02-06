import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import Navbar from "../components/Navbar";
import Fondo from "../assets/Fondo.png";
import "../style/Contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  // Tu número de WhatsApp (cambiar por tu número real)
  const WHATSAPP_NUMBER = "51950874416"; // Formato: código de país + número sin espacios ni símbolos

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear el mensaje formateado para WhatsApp
    const mensaje = `
*Nuevo mensaje desde el portafolio* 🚀

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Asunto:* ${formData.asunto}

*Mensaje:*
${formData.mensaje}
    `.trim();

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappURL, '_blank');

    // Limpiar formulario después de enviar
    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: ""
    });
  };

  const contactInfo = [
    {
      icono: "pi pi-envelope",
      titulo: "Email",
      valor: "aguirreandrea457@gmail.com",
      link: "mailto:aguirreandrea457@gmail.com"
    },
    {
      icono: "pi pi-phone",
      titulo: "Teléfono / WhatsApp",
      valor: "+51 950 874 416",
      link: `https://wa.me/${WHATSAPP_NUMBER}`
    },
    {
      icono: "pi pi-map-marker",
      titulo: "Ubicación",
      valor: "Lima, Perú",
      link: null
    }
  ];

  const socialLinks = [
    {
      icono: "pi pi-github",
      nombre: "GitHub",
      link: "https://github.com/tu-usuario",
    },
    {
      icono: "pi pi-linkedin",
      nombre: "LinkedIn",
      link: "https://linkedin.com/in/tu-usuario",
    },
    {
      icono: "pi pi-whatsapp",
      nombre: "WhatsApp",
      link: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
    {
      icono: "pi pi-globe",
      nombre: "Portfolio",
      link: "https://tu-portfolio.com",
    }
  ];

  return (
    <>
      <Navbar />
      <div className="contacto-page">
        {/* Fixed Background */}
        <img src={Fondo} className="contacto-background" alt="" />

        {/* Scrollable Content */}
        <section className="contacto-section">
          <div className="contacto-container">
            {/* Header */}
            <div className="contacto-header">
              <h1 className="contacto-title">Contacto</h1>
              <p className="contacto-subtitle">
                ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
              </p>
            </div>

            <div className="contacto-content">
              {/* Contact Information */}
              <div className="contacto-info-section">
                <div className="info-card-main">
                  <h2 className="info-title">Información de Contacto</h2>
                  <p className="info-description">
                    Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
                  </p>

                  <div className="contact-info-list">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="contact-info-item">
                        <div className="contact-info-icon">
                          <i className={item.icono}></i>
                        </div>
                        <div className="contact-info-content">
                          <h4>{item.titulo}</h4>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              className="contact-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.valor}
                            </a>
                          ) : (
                            <p>{item.valor}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="social-section">
                    <h3 className="social-title">Sígueme en</h3>
                    <div className="social-links">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link-btn"
                          title={social.nombre}
                        >
                          <i className={social.icono}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contacto-form-section">
                <div className="form-card">
                  <div className="form-header">
                    <h2 className="form-title">Envíame un Mensaje</h2>
                    <div className="whatsapp-badge">
                      <i className="pi pi-whatsapp"></i>
                      <span>Vía WhatsApp</span>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="nombre" className="form-label">
                        Nombre Completo *
                      </label>
                      <InputText
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <InputText
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="asunto" className="form-label">
                        Asunto *
                      </label>
                      <InputText
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        placeholder="¿Sobre qué quieres hablar?"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mensaje" className="form-label">
                        Mensaje *
                      </label>
                      <InputTextarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntame más sobre tu proyecto..."
                        className="form-textarea"
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      label="Enviar por WhatsApp"
                      icon="pi pi-whatsapp"
                      iconPos="right"
                      className="submit-button"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}