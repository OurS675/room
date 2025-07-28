import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Sistema de Gestión Empresarial',
      description: 'Plataforma integral para la gestión de recursos, personal y proyectos empresariales. Implementada con las últimas tecnologías en desarrollo web.',
      image: null
    },
    {
      id: 2,
      title: 'App de Comercio Electrónico',
      description: 'Aplicación móvil para compras en línea con integración de pagos, gestión de inventario y sistema de recomendaciones personalizado.',
      image: null
    },
    {
      id: 3,
      title: 'Portal Educativo',
      description: 'Plataforma de aprendizaje en línea con cursos interactivos, seguimiento de progreso y certificaciones digitales.',
      image: null
    }
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
        <div style={{
          backgroundColor: 'var(--color-black)',
          color: 'var(--color-white)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,100,0,0.2), rgba(0,0,0,0.4))'
          }}></div>
          <ParticleBackground />
          <div className="container mx-auto px-4 text-center" style={{position: 'relative', zIndex: 2}}>
            <h1 className="animate-fadeIn" style={{
          fontSize: 'clamp(3rem, 5vw, 5rem)',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, var(--color-primary), #45a049)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
            }}>
          Program
            </h1>
            <p className="animate-fadeIn" style={{
          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
          color: 'var(--color-gray-300)',
          maxWidth: '48rem',
          margin: '0 auto',
          animationDelay: '0.2s',
          padding: '1rem'
            }}>
          Transformando ideas en soluciones tecnológicas innovadoras
            </p>
            <div
          className="animate-fadeIn flex flex-col sm:flex-row justify-center items-center mt-8"
          style={{
            animationDelay: '0.4s',
            gap: '1.5rem', // Aumenta el espacio entre los botones
          }}
            >
          <Link to="/proyectos" className="btn btn-primary w-full sm:w-auto px-5 py-3 rounded-lg font-medium shadow transition-colors text-base text-center animate-bounce">
            Conoce más
          </Link>
          <Link to="/contacto" className="btn btn-outline w-full sm:w-auto px-5 py-3 rounded-lg font-medium shadow transition-colors text-base text-center animate-bounce">
            Contáctanos
          </Link>
            </div>
          </div>
        </div>

        {/* Proyectos Destacados */}
      <div className="container mx-auto px-4" style={{padding: '4rem 0'}}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
          background: 'linear-gradient(to right, var(--color-primary), #45a049)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Proyectos Destacados
        </h2>
        <p style={{
          color: 'var(--color-gray-600)',
          textAlign: 'center',
          maxWidth: '32rem',
          margin: '0 auto 3rem'
        }}>
          Descubre algunos de nuestros proyectos más destacados y cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>

        {/* Estadísticas */}
        <div style={{
          marginTop: '6rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'var(--color-primary)',
              marginBottom: '0.5rem'
            }}>100+</div>
            <div style={{color: 'var(--color-gray-600)'}}>Proyectos Completados</div>
          </div>
          <div className="animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'var(--color-primary)',
              marginBottom: '0.5rem'
            }}>98%</div>
            <div style={{color: 'var(--color-gray-600)'}}>Clientes Satisfechos</div>
          </div>
          <div className="animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'var(--color-primary)',
              marginBottom: '0.5rem'
            }}>10+</div>
            <div style={{color: 'var(--color-gray-600)'}}>Años de Experiencia</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;