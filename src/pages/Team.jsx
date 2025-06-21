import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ana Martínez',
      role: 'CEO & Fundadora',
      description: 'Con más de 15 años de experiencia en desarrollo de software y gestión de proyectos tecnológicos. Especialista en inteligencia artificial y machine learning.',
      image: null
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director Técnico',
      description: 'Experto en arquitectura de software y desarrollo full-stack. Lidera el equipo de desarrollo y establece los estándares técnicos de los proyectos.',
      image: null
    },
    {
      name: 'Laura Sánchez',
      role: 'Diseñadora UX/UI',
      description: 'Apasionada por crear experiencias de usuario excepcionales. Especialista en diseño de interfaces y usabilidad.',
      image: null
    },
    {
      name: 'Miguel Torres',
      role: 'Desarrollador Senior',
      description: 'Especialista en desarrollo web y móvil. Experto en React, Node.js y tecnologías cloud.',
      image: null
    },
    {
      name: 'Patricia López',
      role: 'Gerente de Proyectos',
      description: 'Certificada en metodologías ágiles. Responsable de la planificación y ejecución exitosa de los proyectos.',
      image: null
    },
    {
      name: 'David García',
      role: 'Especialista en DevOps',
      description: 'Experto en automatización, CI/CD y arquitectura cloud. Garantiza la calidad y eficiencia de nuestros procesos de desarrollo.',
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
            Nuestro Equipo
          </h1>
          <p style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 4rem',
            color: 'var(--color-gray-300)',
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            lineHeight: '1.6'
          }}>
            Un grupo de profesionales apasionados por la tecnología y comprometidos con la excelencia.
            Cada miembro aporta su experiencia única para crear soluciones innovadoras.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {teamMembers.map((member, index) => {
              const [showFullDescription, setShowFullDescription] = useState(false);
              return (
              <div key={index} style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                animation: 'fadeIn 0.5s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                padding: '1rem'
              }} className="animate-fadeIn">
                <div style={{
                  backgroundColor: '#e8f5e9',
                  borderRadius: '0.5rem',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <svg
                    style={{
                      width: '4rem',
                      height: '4rem',
                      color: 'var(--color-primary)',
                      marginBottom: '1rem'
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-primary)', textAlign: 'center' }}>
                    {member.name}
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', marginBottom: '1rem', fontStyle: 'italic', textAlign: 'center' }}>
                    {member.role}
                  </p>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    marginBottom: '1rem',
                    maxHeight: showFullDescription ? 'none' : '4.5em',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-out'
                  }}>
                    {member.description}
                  </p>
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
                      margin: '0 auto',
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

export default Team;