import React from 'react';
import {AbsoluteFill} from 'remotion';
import {LowerThird} from '../components/LowerThird';
import {NewsCard} from '../components/NewsCard';
import {NewsLogo} from '../components/NewsLogo';
import news from '../data/news.json';

const world = news.sections[1];

export const WorldNews: React.FC = () => {
  return (
    <AbsoluteFill style={{padding: '82px 64px 250px', fontFamily: 'Inter, Arial, sans-serif'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <NewsLogo compact />
        <div style={{textAlign: 'right'}}>
          <div style={{color: '#6ab0f5', fontSize: 24, fontWeight: 900, letterSpacing: 4}}>{world.label}</div>
          <div style={{color: '#9db7d8', fontSize: 22, fontWeight: 650, marginTop: 8}}>Geopolítica • Ambiente • Saúde</div>
        </div>
      </div>
      <div style={{height: 78}} />
      <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
        {world.items.map((item, index) => (
          <NewsCard key={item.number} item={item} delayFrames={index * 34} accent="blue" />
        ))}
      </div>
      <LowerThird section={world.region.toUpperCase()} date={news.date} />
    </AbsoluteFill>
  );
};
