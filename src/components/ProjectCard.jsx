import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, image }) => {
  return (
    <div className="card animate-fadeIn">
      <div className="card-image">
          {image ? (
            <img
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s'
              }}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e8f5e9',
              color: 'var(--color-primary)'
            }}>
              <svg
                style={{
                  width: '3rem',
                  height: '3rem',
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)',
            padding: '1rem'
          }}>
            <h3 style={{
              color: 'var(--color-white)',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              transition: 'color 0.3s'
            }}>
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
            }}>
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