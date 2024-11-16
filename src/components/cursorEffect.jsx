import React, { useEffect, useRef } from 'react';

const LightCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-60 h-60 bg-white opacity-10 rounded-full pointer-events-none sm:block hidden"
      style={{
        transform: 'translate(-50%, -50%)',
        filter: 'blur(60px)',
        zIndex: 50,
      }}
    />
  );
};

export default LightCursor;
