import React from 'react';
import {AbsoluteFill} from 'remotion';
import {LowerThird} from '../components/LowerThird';
import {NewsCard} from '../components/NewsCard';
import {NewsLogo} from '../components/NewsLogo';
import news from '../data/news.json';

const brazil = news.sections[0];

export const BrazilNews: React.FC = () => {
  return (
    <AbsoluteFill style={{padding: '82px 64px 250px', fontFamily: 'Inter, Arial, sans-serif'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <NewsLogo compact />
        <div style={{textAlign: 'right'}}>
          <div style={{color: '#d92743', fontSize: 24, fontWeight: 900, letterSpacing: 4}}>{brazil.label}</div>
          <div style={{color: '#9db7d8', fontSize: 22, fontWeight: 650, marginTop: 8}}>Política • Economia • Segurança</div>
        </div>
      </div>
      <div style={{height: 78}} />
      <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
        {brazil.items.map((item, index) => (
          <NewsCard key={item.number} item={item} delayFrames={index * 34} accent="red" />
        ))}
      </div>
      <LowerThird section={brazil.region.toUpperCase()} date={news.date} />
    </AbsoluteFill>
  );
};
