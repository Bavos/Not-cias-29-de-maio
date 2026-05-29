import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {NewsLogo} from '../components/NewsLogo';
import news from '../data/news.json';

export const Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18, 132, 150], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        padding: '160px 76px 300px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Inter, Arial, sans-serif',
        opacity,
      }}
    >
      <NewsLogo />
      <h2
        style={{
          margin: '92px 0 0',
          color: '#ffffff',
          fontSize: 64,
          lineHeight: 1.05,
          fontWeight: 880,
          letterSpacing: -1.8,
          maxWidth: 850,
        }}
      >
        Essas foram as principais notícias do dia.
      </h2>
      <div style={{marginTop: 34, color: '#b8cbe4', fontSize: 34, fontWeight: 690}}>{news.date}</div>
      <div
        style={{
          marginTop: 72,
          borderRadius: 999,
          padding: '20px 32px',
          color: '#dce8f7',
          fontSize: 25,
          fontWeight: 720,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
        }}
      >
        {news.ticker}
      </div>
    </AbsoluteFill>
  );
};
