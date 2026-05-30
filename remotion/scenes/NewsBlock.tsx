import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {GoogleGradientBackground} from '../components/GoogleGradientBackground';
import {HashtagBar} from '../components/HashtagBar';
import {NewsCard} from '../components/NewsCard';
import {ProgressBar} from '../components/ProgressBar';
import {NewsCardProps} from '../components/NewsCard';
import {googleColors} from '../utils/videoConfig';

export type NewsBlockProps = NewsCardProps & {
  kicker: string;
  hashtags: string[];
};

export const NewsBlock: React.FC<NewsBlockProps> = ({kicker, hashtags, ...card}) => {
  const frame = useCurrentFrame();
  const bgScale = interpolate(frame, [0, 70, 150], [1.04, 1, 1.03], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const tickerX = interpolate(frame % 120, [0, 120], [0, -520]);

  return (
    <AbsoluteFill style={{backgroundColor: googleColors.dark, overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, transform: `scale(${bgScale})`}}>
        <GoogleGradientBackground intensity={0.86} />
      </div>
      <div style={{position: 'absolute', top: 88, left: 78, right: 78, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{color: googleColors.white, fontSize: 34, fontWeight: 950, letterSpacing: 1.4, textTransform: 'uppercase'}}>{kicker}</div>
        <div style={{display: 'flex', gap: 14}}>
          {[googleColors.blue, googleColors.red, googleColors.yellow, googleColors.green].map((color, index) => (
            <div key={color} style={{width: 34 + index * 5, height: 18, borderRadius: 999, background: color}} />
          ))}
        </div>
      </div>
      <div style={{position: 'absolute', top: 265, left: 90}}>
        <NewsCard {...card} />
      </div>
      <div style={{position: 'absolute', top: 1490, left: 0, width: 1080, height: 96, overflow: 'hidden', background: 'rgba(255,255,255,0.08)', borderTop: '1px solid rgba(255,255,255,0.16)', borderBottom: '1px solid rgba(255,255,255,0.16)'}}>
        <div style={{display: 'flex', gap: 40, alignItems: 'center', height: '100%', transform: `translateX(${tickerX}px)`, color: googleColors.white, fontSize: 34, fontWeight: 900, whiteSpace: 'nowrap'}}>
          {Array.from({length: 6}).map((_, index) => (
            <span key={index}>⚡ IA • infraestrutura • regulação • agentes • devtools • visibilidade</span>
          ))}
        </div>
      </div>
      <HashtagBar hashtags={hashtags} top={1660} />
      <ProgressBar />
    </AbsoluteFill>
  );
};
