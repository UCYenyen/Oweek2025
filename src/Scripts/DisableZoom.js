// components/DisableZoom.js
'use client'; // This is a client component

import { useEffect } from 'react';

const DisableZoom = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=')) {
        event.preventDefault();
      }
    };

    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false }); // passive: false is needed to prevent default

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default DisableZoom;