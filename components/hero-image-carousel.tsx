'use client';

import { useEffect, useState } from 'react';

const heroImages = ['/hero-1.jpg', '/hero-2.jpg', '/hero-3.png', '/hero-4.png', '/hero-5.jpg'];

export function HeroImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1));
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`img-duotone absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            animation: index === currentImageIndex ? 'heroZoom 16s ease-in-out infinite' : 'none',
            transform: 'scale(1.06)',
          }}
        />
      ))}
      {/* Electric-blue duotone cast */}
      <div className="absolute inset-0 bg-blue/35 mix-blend-color" />
      {/* Legibility: darken + bottom-weighted gradient toward the ink base */}
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
    </div>
  );
}
