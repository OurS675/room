const Footer = () => {
  return (
    <footer className="footer bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8 mt-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fadeIn">
            <h3 className="footer-title text-gray-800 dark:text-white">Program</h3>
            <p className="footer-link">
              Innovando y creando soluciones tecnológicas para un futuro mejor.
            </p>
          </div>
          <div className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <h3 className="footer-title text-gray-800 dark:text-white">Contacto</h3>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <li className="footer-link" style={{display: 'flex', alignItems: 'center'}}>
                <svg style={{width: '1.25rem', height: '1.25rem', marginRight: '0.5rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contacto@program.com
              </li>
              <li className="footer-link" style={{display: 'flex', alignItems: 'center'}}>
                <svg style={{width: '1.25rem', height: '1.25rem', marginRight: '0.5rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (123) 456-7890
              </li>
              <li className="footer-link" style={{display: 'flex', alignItems: 'center'}}>
                <svg style={{width: '1.25rem', height: '1.25rem', marginRight: '0.5rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Calle Principal #123
              </li>
            </ul>
          </div>
          <div className="animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <h3 className="footer-title text-gray-800 dark:text-white">Síguenos</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <a href="#" className="footer-link hover:scale-110 transition-transform duration-300" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <svg style={{width: '20px', height: '20px'}} fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <span>Facebook</span>
              </a>
              
              <a href="https://github.com/tu-usuario" className="footer-link hover:scale-110 transition-transform duration-300" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <svg style={{width: '20px', height: '20px'}} fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
              <a href="#" className="footer-link hover:scale-110 transition-transform duration-300" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <svg style={{width: '20px', height: '20px'}} fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 py-8 text-center bg-gray-900">
        <div className="container">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Program. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;