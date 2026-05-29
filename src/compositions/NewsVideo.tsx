import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedBackground} from '../components/AnimatedBackground';
import {BreakingBanner} from '../components/BreakingBanner';
import news from '../data/news.json';
import {BrazilNews} from './BrazilNews';
import {Closing} from './Closing';
import {Intro} from './Intro';
import {WorldNews} from './WorldNews';

const Clock: React.FC = () => {
  const frame = useCurrentFrame();
  const seconds = Math.floor(frame / 30);
  const label = `00:${String(seconds).padStart(2, '0')}`;

  return (
    <div
      style={{
        position: 'absolute',
        top: 92,
        right: 76,
        borderRadius: 999,
        padding: '12px 20px',
        color: '#dce8f7',
        background: 'rgba(2, 8, 18, 0.48)',
        border: '1px solid rgba(255,255,255,0.13)',
        fontFamily: 'Inter, Arial, sans-serif',
        fontSize: 22,
        fontWeight: 760,
        letterSpacing: 1.2,
      }}
    >
      {label}
    </div>
  );
};

const EditorialOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const scan = interpolate(frame % 180, [0, 180], [-220, 1920], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          top: scan,
          left: 0,
          right: 0,
          height: 220,
          opacity: 0.08,
          background: 'linear-gradient(180deg, transparent, #ffffff, transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0 0 180px rgba(0,0,0,0.38)',
        }}
      />
    </AbsoluteFill>
  );
};

export const NewsVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <AnimatedBackground />
      <EditorialOverlay />
      <Sequence from={0} durationInFrames={120}>
        <Intro />
      </Sequence>
      <Sequence from={120} durationInFrames={600}>
        <BrazilNews />
      </Sequence>
      <Sequence from={720} durationInFrames={480}>
        <WorldNews />
      </Sequence>
      <Sequence from={1200} durationInFrames={150}>
        <Closing />
      </Sequence>
      <Clock />
      <BreakingBanner text={news.ticker} />
    </AbsoluteFill>
  );
};
