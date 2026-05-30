import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {googleColors} from '../utils/videoConfig';

export type NewsCardProps = {
  emoji: string;
  label: string;
  title: string;
  lines: string[];
  color: string;
  delay?: number;
};

export const NewsCard: React.FC<NewsCardProps> = ({emoji, label, title, lines, color, delay = 0}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const localFrame = Math.max(0, frame - delay);
  const enter = spring({frame: localFrame, fps, config: {damping: 13, stiffness: 170, mass: 0.75}});
  const opacity = interpolate(localFrame, [0, 10], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const x = interpolate(localFrame, [0, 16], [160, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const shine = interpolate(frame % 90, [0, 45, 90], [-220, 760, -220]);

  return (
    <div
      style={{
        position: 'relative',
        width: 900,
        minHeight: 880,
        padding: 54,
        borderRadius: 58,
        background: 'linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.07))',
        border: '2px solid rgba(255,255,255,0.20)',
        boxShadow: `0 34px 100px rgba(0,0,0,0.42), 0 0 0 8px ${color}18`,
        overflow: 'hidden',
        opacity,
        transform: `translateX(${x}px) scale(${0.9 + enter * 0.1})`,
      }}
    >
      <div style={{position: 'absolute', inset: 0, background: `radial-gradient(circle at 18% 0%, ${color}55 0%, transparent 35%)`}} />
      <div
        style={{
          position: 'absolute',
          top: -80,
          left: shine,
          width: 150,
          height: 1120,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.24), transparent)',
          transform: 'rotate(18deg)',
        }}
      />
      <div style={{position: 'relative', zIndex: 1}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 22, marginBottom: 36}}>
          <div
            style={{
              width: 108,
              height: 108,
              borderRadius: 32,
              display: 'grid',
              placeItems: 'center',
              fontSize: 58,
              background: color,
              boxShadow: `0 20px 55px ${color}55`,
            }}
          >
            {emoji}
          </div>
          <div
            style={{
              color: color === googleColors.yellow ? googleColors.dark : googleColors.white,
              background: color,
              borderRadius: 999,
              padding: '13px 22px',
              fontSize: 30,
              fontWeight: 950,
              letterSpacing: 1.2,
              textTransform: 'uppercase',
            }}
          >
            {label}
          </div>
        </div>
        <div style={{fontSize: 78, lineHeight: 0.96, fontWeight: 950, color: googleColors.white, marginBottom: 34}}>{title}</div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
          {lines.map((line, index) => {
            const itemOpacity = interpolate(localFrame, [12 + index * 9, 24 + index * 9], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
            const itemY = interpolate(localFrame, [12 + index * 9, 24 + index * 9], [32, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
            return (
              <div
                key={line}
                style={{
                  opacity: itemOpacity,
                  transform: `translateY(${itemY}px)`,
                  padding: '26px 30px',
                  borderRadius: 34,
                  background: 'rgba(11,15,25,0.62)',
                  borderLeft: `12px solid ${color}`,
                  color: googleColors.white,
                  fontSize: 47,
                  lineHeight: 1.06,
                  fontWeight: 850,
                }}
              >
                {line}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
