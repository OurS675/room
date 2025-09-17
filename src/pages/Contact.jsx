import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('Mensaje enviado con éxito');
  };

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
            Contáctanos
          </h1>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Formulario de contacto */}
            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              animation: 'fadeIn 0.5s ease-out forwards'
            }} className="animate-fadeIn">
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: 'var(--color-gray-900)'
              }}>Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" style={{ color: 'var(--color-gray-700)', marginBottom: '0.5rem', display: 'block' }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid var(--color-gray-300)',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ color: 'var(--color-gray-700)', marginBottom: '0.5rem', display: 'block' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid var(--color-gray-300)',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{ color: 'var(--color-gray-700)', marginBottom: '0.5rem', display: 'block' }}>
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid var(--color-gray-300)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary animate-bounce"
                  style={{ marginTop: '1rem' }}
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div style={{ color: 'var(--color-white)' }}>
              <div style={{ marginBottom: '3rem', animation: 'fadeIn 0.5s ease-out forwards', animationDelay: '0.2s' }} className="animate-fadeIn">
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}>Ubicación</h2>
                <p style={{ color: 'var(--color-gray-300)', lineHeight: '1.6' }}>
                  Calle Principal 123<br />
                  Ciudad Empresarial<br />
                  28001 Madrid, España
                </p>
              </div>

              <div style={{ marginBottom: '3rem', animation: 'fadeIn 0.5s ease-out forwards', animationDelay: '0.4s' }} className="animate-fadeIn">
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}>Contacto directo</h2>
                <p style={{ color: 'var(--color-gray-300)', lineHeight: '1.6' }}>
                  Email: info@Synaphex.com<br />
                  Teléfono: +34 900 123 456<br />
                  WhatsApp: +34 600 123 456
                </p>
              </div>

              <div style={{ animation: 'fadeIn 0.5s ease-out forwards', animationDelay: '0.6s' }} className="animate-fadeIn">
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}>Horario de atención</h2>
                <p style={{ color: 'var(--color-gray-300)', lineHeight: '1.6' }}>
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábado: 10:00 - 14:00<br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;