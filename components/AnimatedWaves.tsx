import React from 'react';

const AnimatedWaves: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <svg className="absolute bottom-0 left-0 w-full h-auto" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill="rgba(59, 130, 246, 0.7)" /> {/* Blue-500 with opacity */}
          <use href="#gentle-wave" x="48" y="3" fill="rgba(59, 130, 246, 0.5)" /> {/* Blue-500 with more opacity */}
          <use href="#gentle-wave" x="48" y="5" fill="rgba(59, 130, 246, 0.3)" /> {/* Blue-500 with even more opacity */}
          <use href="#gentle-wave" x="48" y="7" fill="rgba(59, 130, 246, 1)" /> {/* Blue-500 solid */}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedWaves;
