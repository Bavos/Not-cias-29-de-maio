import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {GoogleGradientBackground} from '../components/GoogleGradientBackground';
import {HashtagBar} from '../components/HashtagBar';
import {ProgressBar} from '../components/ProgressBar';
import {googleColors} from '../utils/videoConfig';

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pop = spring({frame, fps, config: {damping: 9, stiffness: 150}});
  const glow = interpolate(frame % 50, [0, 25, 50], [0.45, 1, 0.45]);

  return (
    <AbsoluteFill style={{backgroundColor: googleColors.dark, overflow: 'hidden'}}>
      <GoogleGradientBackground intensity={1.2} />
      <div style={{position: 'absolute', top: 120, left: 76, right: 76, color: googleColors.yellow, fontSize: 38, fontWeight: 950, letterSpacing: 2, textTransform: 'uppercase'}}>
        próximo passo
      </div>
      <div
        style={{
          position: 'absolute',
          top: 300,
          left: 74,
          right: 74,
          padding: 58,
          borderRadius: 64,
          background: 'linear-gradient(145deg, rgba(255,255,255,0.20), rgba(255,255,255,0.08))',
          border: `3px solid rgba(255,255,255,0.2)`,
          boxShadow: `0 0 ${90 * glow}px rgba(66,133,244,0.45)`,
          transform: `scale(${0.88 + pop * 0.12})`,
        }}
      >
        <div style={{fontSize: 82, lineHeight: 0.96, fontWeight: 950, color: googleColors.white, marginBottom: 36}}>
          Quer transformar essas tendências em automações reais?
        </div>
        <div style={{fontSize: 48, lineHeight: 1.1, fontWeight: 850, color: '#E8EAED'}}>
          Salve este vídeo e acompanhe os próximos briefings de IA.
        </div>
      </div>
      <div style={{position: 'absolute', top: 1060, left: 88, right: 88, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22}}>
        {[
          ['🤖', 'agentes'],
          ['⚙️', 'n8n + no-code'],
          ['🔎', 'GEO'],
          ['🚀', 'devtools'],
        ].map(([emoji, text], index) => (
          <div key={text} style={{padding: 28, borderRadius: 34, background: index % 2 === 0 ? googleColors.blue : googleColors.green, color: googleColors.white, fontSize: 39, fontWeight: 950, textAlign: 'center'}}>
            {emoji} {text}
          </div>
        ))}
      </div>
      <HashtagBar hashtags={['#IA', '#AgentesIA', '#NoCode', '#N8N', '#GEO', '#OpenAI', '#TechNews']} top={1570} />
      <ProgressBar />
    </AbsoluteFill>
  );
};
