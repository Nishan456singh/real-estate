// components/ProgressBar.tsx

import React from 'react';

interface ProgressBarProps {
  progress: number; // Progress in percentage (0 - 100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div style={{ border: '1px solid #000', width: '100%', height: '20px' }}>
      <div style={{ background: '#00f', width: `${progress}%`, height: '100%' }} />
    </div>
  );
}

export default ProgressBar;