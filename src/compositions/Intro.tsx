import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {NewsLogo} from '../components/NewsLogo';
import news from '../data/news.json';

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const intro = spring({frame, fps, config: {damping: 18, stiffness: 80}});
  const titleOpacity = interpolate(frame, [8, 28], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        padding: '180px 76px',
        justifyContent: 'center',
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      <div style={{position: 'absolute', top: 86, left: 76}}>
        <NewsLogo />
      </div>
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${interpolate(intro, [0, 1], [58, 0])}px)`,
        }}
      >
        <div
          style={{
            color: '#d92743',
            fontSize: 25,
            fontWeight: 900,
            letterSpacing: 5,
            marginBottom: 28,
          }}
        >
          EDIÇÃO ESPECIAL
        </div>
        <h1
          style={{
            margin: 0,
            color: '#ffffff',
            fontSize: 88,
            lineHeight: 0.95,
            fontWeight: 920,
            letterSpacing: -3.2,
            textShadow: '0 20px 60px rgba(0,0,0,0.34)',
          }}
        >
          {news.headline}
        </h1>
        <div
          style={{
            marginTop: 34,
            color: '#b8cbe4',
            fontSize: 34,
            fontWeight: 650,
          }}
        >
          {news.subtitle}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          right: 76,
          bottom: 318,
          color: '#8ca6c4',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: 2.8,
        }}
      >
        45 SEGUNDOS • SEM SOM
      </div>
    </AbsoluteFill>
  );
};
