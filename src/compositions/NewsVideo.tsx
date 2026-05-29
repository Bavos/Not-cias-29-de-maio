import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedBackground} from '../components/AnimatedBackground';
import {BreakingBanner} from '../components/BreakingBanner';
import news from '../data/news.json';
import {BrazilNews} from './BrazilNews';
import {Closing} from './Closing';
import {Intro} from './Intro';
import {WorldNews} from './WorldNews';

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
      <BreakingBanner text={news.ticker} />
    </AbsoluteFill>
  );
};
