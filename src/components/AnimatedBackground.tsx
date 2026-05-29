import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const AnimatedBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 1350], [0, 1]);
  const pulse = interpolate(Math.sin(frame / 36), [-1, 1], [0.78, 1]);

  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        background:
          'linear-gradient(150deg, #071224 0%, #0a1d36 42%, #102a4d 73%, #06101f 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.55,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          transform: `translate(${drift * -46}px, ${drift * 36}px)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 1180,
          height: 1180,
          borderRadius: '50%',
          top: -260,
          left: -470,
          background:
            'radial-gradient(circle, rgba(47,125,202,0.48) 0%, rgba(47,125,202,0.14) 38%, rgba(47,125,202,0) 70%)',
          transform: `scale(${pulse})`,
          filter: 'blur(8px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 950,
          height: 950,
          borderRadius: '50%',
          right: -430,
          bottom: 160,
          background:
            'radial-gradient(circle, rgba(205,31,51,0.34) 0%, rgba(205,31,51,0.1) 36%, rgba(205,31,51,0) 72%)',
          transform: `translateY(${Math.sin(frame / 55) * 22}px)`,
          filter: 'blur(10px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 76,
          right: 76,
          top: 210,
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 76,
          right: 76,
          bottom: 302,
          height: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
        }}
      />
    </AbsoluteFill>
  );
};
