import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuración de partículas
    const particles = [];
    const particleCount = 50;

    // Ajustar el tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Crear partículas iniciales
    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    // Actualizar partículas
    const updateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
    };

    // Dibujar partículas
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(144, 238, 144, ${particle.opacity})`;
        ctx.fill();
      });
    };

    // Función de animación
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicialización
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

export default ParticleBackground;