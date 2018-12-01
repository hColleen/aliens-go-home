import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      viewBox={viewBox}
    >
    <Sky />
    <Ground />
    <CannonPipe />
      <CannonBase />
    </svg>
  );
};

export default Canvas;