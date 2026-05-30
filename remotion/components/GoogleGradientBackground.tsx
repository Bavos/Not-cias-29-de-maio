import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {fontStack, googleColors} from '../utils/videoConfig';

export const GoogleGradientBackground: React.FC<{intensity?: number}> = ({intensity = 1}) => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame % 180, [0, 90, 180], [-80, 80, -80]);
  const pulse = interpolate(frame % 60, [0, 30, 60], [0.85, 1, 0.85]);

  return (
    <AbsoluteFill
      style={{
        overflow: 'hidden',
        background: `radial-gradient(circle at ${18 + drift / 18}% 12%, ${googleColors.blue}77 0%, transparent 34%), radial-gradient(circle at 80% ${22 + drift / 24}%, ${googleColors.red}62 0%, transparent 30%), radial-gradient(circle at 22% 82%, ${googleColors.green}66 0%, transparent 33%), linear-gradient(145deg, ${googleColors.dark} 0%, #12182A 52%, #05070D 100%)`,
        fontFamily: fontStack,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.22 * intensity,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          transform: `translate(${drift / 4}px, ${drift / 5}px)`,
        }}
      />
      {[
        {color: googleColors.blue, top: 210, left: -120, size: 300},
        {color: googleColors.red, top: 1030, left: 830, size: 260},
        {color: googleColors.yellow, top: 1450, left: 80, size: 210},
        {color: googleColors.green, top: 650, left: 760, size: 230},
      ].map((orb, index) => (
        <div
          key={orb.color}
          style={{
            position: 'absolute',
            top: orb.top + Math.sin((frame + index * 23) / 22) * 24,
            left: orb.left + Math.cos((frame + index * 17) / 26) * 28,
            width: orb.size,
            height: orb.size,
            borderRadius: '999px',
            background: orb.color,
            filter: 'blur(42px)',
            opacity: 0.22 * pulse * intensity,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
