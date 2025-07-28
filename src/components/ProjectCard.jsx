import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, image }) => {
  return (
    <div className="card animate-fadeIn rounded-lg shadow-lg overflow-hidden flex flex-col w-full h-full">
      <div className="card-image relative w-full h-48 sm:h-56 md:h-64">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-green-50 text-primary">
              <svg
                className="w-12 h-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white text-lg font-bold truncate whitespace-nowrap transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
        <div className="card-content">
          <p style={{
            color: 'var(--color-gray-600)',
            fontSize: '0.875rem',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            transition: 'color 0.3s'
          }}>
            {description}
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <Link to={`/proyecto/${id}`} style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'background-color 0.3s'
            }} className="animate-bounce">
              Ver más
              <svg
                style={{ width: '1rem', height: '1rem' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
  );
};
export default ProjectCard;