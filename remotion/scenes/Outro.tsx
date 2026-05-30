import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {googleColors} from '../utils/videoConfig';

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15, 60], [0, 1, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 22], [120, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{opacity, justifyContent: 'center', alignItems: 'center', background: 'rgba(5,7,13,0.78)'}}>
      <div style={{transform: `translateY(${y}px)`, textAlign: 'center', padding: 80}}>
        <div style={{fontSize: 86, lineHeight: 0.92, fontWeight: 950, color: googleColors.white}}>Briefings de IA todos os dias</div>
        <div style={{marginTop: 28, fontSize: 43, fontWeight: 900, color: googleColors.yellow}}>salve • compartilhe • implemente</div>
      </div>
    </AbsoluteFill>
  );
};
