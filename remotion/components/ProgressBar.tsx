import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {googleColors, VIDEO_DURATION_FRAMES} from '../utils/videoConfig';

export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const width = interpolate(frame, [0, VIDEO_DURATION_FRAMES], [0, 1080], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div style={{position: 'absolute', left: 0, bottom: 0, width: 1080, height: 18, background: 'rgba(255,255,255,0.14)'}}>
      <div
        style={{
          width,
          height: '100%',
          background: `linear-gradient(90deg, ${googleColors.blue}, ${googleColors.red}, ${googleColors.yellow}, ${googleColors.green})`,
          boxShadow: '0 -8px 30px rgba(66,133,244,0.45)',
        }}
      />
    </div>
  );
};
