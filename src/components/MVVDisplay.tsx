import React from 'react';
import { MVV } from '../types/index';

interface MVVDisplayProps {
  mvv: MVV;
}

const MVVDisplay: React.FC<MVVDisplayProps> = ({ mvv }) => {
  return (
    <div id="mvvDisplay">
      <h2>Mission</h2>
      <p>{mvv.mission}</p>
      <h2>Vision</h2>
      <p>{mvv.vision}</p>
      <h2>Values</h2>
      <p>{mvv.values}</p>
    </div>
  );
};

export default MVVDisplay;