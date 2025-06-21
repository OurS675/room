import { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Empresarial',
      description: 'Plataforma integral para la gestión de recursos, personal y proyectos empresariales. Implementada con las últimas tecnologías en desarrollo web.',
      category: 'Desarrollo Web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      image: null
    },
    {
      id: 2,
      title: 'App de Comercio Electrónico',
      description: 'Aplicación móvil para compras en línea con integración de pagos, gestión de inventario y sistema de recomendaciones personalizado.',
      category: 'Desarrollo Móvil',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      image: null
    },
    {
      id: 3,
      title: 'Portal Educativo',
      description: 'Plataforma de aprendizaje en línea con cursos interactivos, seguimiento de progreso y certificaciones digitales.',
      category: 'E-Learning',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
      image: null
    },
    {
      id: 4,
      title: 'Sistema de Análisis de Datos',
      description: 'Herramienta de análisis de datos empresariales con visualizaciones interactivas y reportes automatizados.',
      category: 'Business Intelligence',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
      image: null
    },
    {
      id: 5,
      title: 'Plataforma IoT',
      description: 'Sistema de monitoreo y control de dispositivos IoT para industria y hogares inteligentes.',
      category: 'Internet of Things',
      technologies: ['MQTT', 'Node-RED', 'InfluxDB', 'Grafana'],
      image: null
    },
    {
      id: 6,
      title: 'App de Gestión de Salud',
      description: 'Aplicación para seguimiento de salud personal con integración de dispositivos wearables y recomendaciones personalizadas.',
      category: 'Healthcare',
      technologies: ['Flutter', 'Spring Boot', 'MySQL', 'Firebase'],
      image: null
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-black)', position: 'relative' }}>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 2, padding: '6rem 0' }}>
        <div className="container">
          <h1 style={{
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            color: 'var(--color-white)',
            background: 'linear-gradient(to right, var(--color-primary), #45a049)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Nuestros Proyectos
          </h1>
          <p style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 4rem',
            color: 'var(--color-gray-300)',
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            lineHeight: '1.6'
          }}>
            Descubre cómo hemos ayudado a nuestros clientes a transformar sus ideas en soluciones digitales innovadoras.
            Cada proyecto refleja nuestro compromiso con la excelencia y la innovación.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '1rem'
          }}>
            {projects.map((project, index) => {
              const [showFullDescription, setShowFullDescription] = useState(false);
              return (
              <div key={project.id} style={{ 
                textDecoration: 'none',
                height: '100%',
                display: 'flex',
                margin: '0 auto',
                width: '100%',
                maxWidth: '500px'
              }}>
                <div className="card" style={{
                  cursor: 'pointer',
                  animation: 'fadeIn 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  width: '100%',
                  minHeight: '400px'
                }} >
                  <div className="card-image" style={{
                    backgroundColor: '#e8f5e9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg
                      style={{
                        width: '4rem',
                        height: '4rem',
                        color: 'var(--color-primary)'
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="card-content">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-primary)', textAlign: 'center' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--color-gray-600)', marginBottom: '1rem', fontStyle: 'italic', textAlign: 'center' }}>
                      {project.category}
                    </p>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      marginBottom: '1rem',
                      maxHeight: showFullDescription ? 'none' : '4.5em',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease-out'
                    }}>
                      {project.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{
                            backgroundColor: 'var(--color-primary-light)',
                            color: 'var(--color-primary)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.875rem'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        style={{
                          backgroundColor: 'var(--color-primary)',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.5rem',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'background-color 0.3s'
                        }}
                      >
                        {showFullDescription ? 'Ver menos' : 'Ver más'}
                        <svg
                          style={{
                            width: '1rem',
                            height: '1rem',
                            transform: showFullDescription ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.3s'
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <Link
                        to={`/proyecto/${project.id}`}
                        style={{
                          backgroundColor: 'var(--color-primary)',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.5rem',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'background-color 0.3s'
                        }}
                      >
                        Ver proyecto
                        <svg
                          style={{
                            width: '1rem',
                            height: '1rem'
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;