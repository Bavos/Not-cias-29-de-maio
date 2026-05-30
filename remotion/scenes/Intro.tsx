import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {AnimatedHeadline} from '../components/AnimatedHeadline';
import {GoogleGradientBackground} from '../components/GoogleGradientBackground';
import {HashtagBar} from '../components/HashtagBar';
import {ProgressBar} from '../components/ProgressBar';
import {googleColors} from '../utils/videoConfig';

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const flash = interpolate(frame, [0, 8, 18], [1, 0.18, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const zoom = interpolate(frame, [0, 22, 120], [1.25, 1, 1.05], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{backgroundColor: googleColors.dark}}>
      <GoogleGradientBackground />
      <AbsoluteFill style={{padding: 78, justifyContent: 'center', transform: `scale(${zoom})`}}>
        <AnimatedHeadline
          align="center"
          eyebrow="briefing relâmpago"
          title="🚨 IA em modo turbo"
          accent="o briefing que você precisa ver hoje"
        />
      </AbsoluteFill>
      <div style={{position: 'absolute', top: 126, left: 78, color: googleColors.white, fontSize: 36, fontWeight: 900, letterSpacing: 2}}>
        29/05/2026 • 45s • sem enrolação
      </div>
      <HashtagBar hashtags={['#IA', '#TechNews', '#AgentesIA', '#GEO', '#OpenAI']} />
      <ProgressBar />
      <AbsoluteFill style={{background: googleColors.white, opacity: flash}} />
    </AbsoluteFill>
  );
};
