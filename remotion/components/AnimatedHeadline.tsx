import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {googleColors} from '../utils/videoConfig';

export const AnimatedHeadline: React.FC<{
  eyebrow?: string;
  title: string;
  accent?: string;
  delay?: number;
  align?: 'left' | 'center';
}> = ({eyebrow, title, accent, delay = 0, align = 'left'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const localFrame = Math.max(0, frame - delay);
  const scale = spring({frame: localFrame, fps, config: {damping: 10, stiffness: 140}});
  const opacity = interpolate(localFrame, [0, 10], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const rotate = interpolate(localFrame, [0, 16], [-2.8, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div style={{textAlign: align, opacity, transform: `scale(${0.84 + scale * 0.16}) rotate(${rotate}deg)`}}>
      {eyebrow ? (
        <div
          style={{
            display: 'inline-block',
            padding: '12px 22px',
            marginBottom: 24,
            borderRadius: 999,
            color: googleColors.dark,
            background: `linear-gradient(90deg, ${googleColors.yellow}, ${googleColors.green})`,
            fontSize: 34,
            fontWeight: 900,
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            boxShadow: '0 18px 42px rgba(251,188,5,0.24)',
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <div
        style={{
          fontSize: 92,
          lineHeight: 0.92,
          fontWeight: 950,
          color: googleColors.white,
          textShadow: '0 18px 60px rgba(0,0,0,0.55)',
        }}
      >
        {title}
      </div>
      {accent ? (
        <div
          style={{
            marginTop: 22,
            color: googleColors.yellow,
            fontSize: 52,
            lineHeight: 1.03,
            fontWeight: 900,
          }}
        >
          {accent}
        </div>
      ) : null}
    </div>
  );
};
