import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  const styles = {
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '2rem 1rem'
    },
    header: {
      marginBottom: '2rem',
      textAlign: 'center'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, var(--color-primary), #45a049)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    description: {
      color: 'var(--color-gray-600)',
      fontSize: '1.125rem',
      maxWidth: '48rem',
      margin: '0 auto'
    },
    section: {
      backgroundColor: 'var(--color-white)',
      borderRadius: '0.5rem',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: 'var(--color-gray-900)'
    },
    tag: {
      backgroundColor: 'var(--color-gray-200)',
      color: 'var(--color-gray-700)',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      marginRight: '0.5rem',
      marginBottom: '0.5rem',
      display: 'inline-block'
    },
    teamMember: {
      marginBottom: '1rem',
      padding: '1rem',
      backgroundColor: 'var(--color-gray-100)',
      borderRadius: '0.375rem'
    },
    memberName: {
      fontWeight: 'bold',
      color: 'var(--color-gray-900)'
    },
    memberRole: {
      color: 'var(--color-gray-600)',
      fontSize: '0.875rem'
    },
    status: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      fontWeight: '500',
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-white)'
    }
  };

  // Datos de ejemplo - En una aplicación real, estos datos vendrían de una API o base de datos
  const projectsData = {
    1: {
      title: 'Sistema de Gestión Empresarial',
      description: 'Plataforma integral para la gestión de recursos, personal y proyectos empresariales. Implementada con las últimas tecnologías en desarrollo web.',
      fullDescription: `
        Nuestro Sistema de Gestión Empresarial es una solución completa diseñada para optimizar y automatizar los procesos empresariales críticos. 
        
        Características principales:
        • Gestión de recursos humanos
        • Control de inventario
        • Seguimiento de proyectos
        • Reportes analíticos
        • Integración con sistemas externos
      `,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      team: [
        { name: 'Ana García', role: 'Project Manager' },
        { name: 'Carlos Rodríguez', role: 'Lead Developer' },
        { name: 'María Martínez', role: 'UX Designer' }
      ],
      duration: '8 meses',
      status: 'Completado'
    },
    2: {
      title: 'App de Comercio Electrónico',
      description: 'Aplicación móvil para compras en línea con integración de pagos, gestión de inventario y sistema de recomendaciones personalizado.',
      fullDescription: `
        Una aplicación móvil moderna que revoluciona la experiencia de compra en línea, combinando facilidad de uso con características avanzadas.
        
        Características principales:
        • Catálogo dinámico de productos
        • Sistema de pagos seguros
        • Recomendaciones personalizadas
        • Seguimiento de pedidos en tiempo real
        • Programa de fidelización
      `,
      technologies: ['React Native', 'Firebase', 'Stripe', 'TensorFlow'],
      team: [
        { name: 'Luis Torres', role: 'Mobile Lead' },
        { name: 'Patricia Sánchez', role: 'Backend Developer' },
        { name: 'Juan Pérez', role: 'UI Designer' }
      ],
      duration: '6 meses',
      status: 'En desarrollo'
    },
    3: {
      title: 'Portal Educativo',
      description: 'Plataforma de aprendizaje en línea con cursos interactivos, seguimiento de progreso y certificaciones digitales.',
      fullDescription: `
        Una plataforma educativa innovadora que facilita el aprendizaje en línea mediante contenido interactivo y herramientas de seguimiento avanzadas.
        
        Características principales:
        • Cursos interactivos multimedia
        • Sistema de evaluación automática
        • Certificaciones digitales
        • Análisis de progreso
        • Foros de discusión
      `,
      technologies: ['Vue.js', 'Django', 'MongoDB', 'AWS'],
      team: [
        { name: 'Elena Ruiz', role: 'Education Specialist' },
        { name: 'Roberto Díaz', role: 'Full Stack Developer' },
        { name: 'Sofia López', role: 'Content Manager' }
      ],
      duration: '12 meses',
      status: 'Completado'
    }
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--color-gray-600)'
        }}>Proyecto no encontrado</p>
      </div>
    );
  }

  return (
    <div style={styles.container} className="animate-fadeIn">
      <header style={styles.header}>
        <h1 style={styles.title}>{project.title}</h1>
        <p style={styles.description}>{project.description}</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Descripción Detallada</h2>
        <p style={{whiteSpace: 'pre-line', color: 'var(--color-gray-700)'}}>
          {project.fullDescription}
        </p>
       </section>

       <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tecnologías Utilizadas</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
          {project.technologies.map((tech, index) => (
            <span key={index} style={styles.tag}>{tech}</span>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Equipo del Proyecto</h2>
        <div style={{display: 'grid', gap: '1rem'}}>
          {project.team.map((member, index) => (
            <div key={index} style={styles.teamMember}>
              <div style={styles.memberName}>{member.name}</div>
              <div style={styles.memberRole}>{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Detalles del Proyecto</h2>
        <div style={{display: 'grid', gap: '1rem'}}>
          <div>
            <strong style={{color: 'var(--color-gray-700)'}}>Duración:</strong>
            <span style={{marginLeft: '0.5rem', color: 'var(--color-gray-600)'}}>{project.duration}</span>
          </div>
          <div>
            <strong style={{color: 'var(--color-gray-700)'}}>Estado:</strong>
            <span style={styles.status}>{project.status}</span>
          </div>
        </div>
      </section>
    </div>
  );


          
            

          
          
            
              

            
            
              
                  
                    
                    
}

export default ProjectDetail;