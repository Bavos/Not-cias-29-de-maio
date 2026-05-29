import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export type NewsItem = {
  number: string;
  title: string;
  bullets: string[];
};

export const NewsCard: React.FC<{
  item: NewsItem;
  delayFrames: number;
  accent?: 'red' | 'blue';
}> = ({item, delayFrames, accent = 'red'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame: frame - delayFrames, fps, config: {damping: 18, stiffness: 90}});
  const opacity = interpolate(frame - delayFrames, [-8, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px)`,
        borderRadius: 30,
        padding: '30px 30px 28px',
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.065) 100%)',
        border: '1px solid rgba(255,255,255,0.17)',
        boxShadow: '0 28px 70px rgba(0,0,0,0.26)',
        fontFamily: 'Inter, Arial, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 8,
          background: accent === 'red' ? '#d92743' : '#3f91df',
        }}
      />
      <div style={{display: 'flex', alignItems: 'flex-start', gap: 22}}>
        <div
          style={{
            width: 62,
            height: 62,
            borderRadius: 18,
            background: accent === 'red' ? 'rgba(217,39,67,0.18)' : 'rgba(63,145,223,0.18)',
            border: `1px solid ${accent === 'red' ? 'rgba(217,39,67,0.46)' : 'rgba(63,145,223,0.46)'}`,
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: 28,
            flexShrink: 0,
          }}
        >
          {item.number}
        </div>
        <div>
          <h2
            style={{
              margin: 0,
              color: '#ffffff',
              fontSize: 34,
              lineHeight: 1.12,
              fontWeight: 860,
              letterSpacing: -0.6,
            }}
          >
            {item.title}
          </h2>
          <div style={{height: 18}} />
          <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
            {item.bullets.map((bullet) => (
              <div key={bullet} style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: accent === 'red' ? '#ff596f' : '#6ab0f5',
                    marginTop: 14,
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    color: '#d9e5f4',
                    fontSize: 24,
                    lineHeight: 1.22,
                    fontWeight: 540,
                  }}
                >
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
