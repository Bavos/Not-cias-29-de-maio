import React from 'react';

export const NewsLogo: React.FC<{compact?: boolean}> = ({compact = false}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: compact ? 12 : 18,
        letterSpacing: 1.2,
      }}
    >
      <div
        style={{
          width: compact ? 54 : 70,
          height: compact ? 54 : 70,
          borderRadius: 16,
          background: 'linear-gradient(135deg, #f4f7fb 0%, #9fc1ea 100%)',
          boxShadow: '0 18px 45px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#071224',
          fontWeight: 900,
          fontSize: compact ? 25 : 32,
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        N
      </div>
      <div>
        <div
          style={{
            color: '#ffffff',
            fontSize: compact ? 28 : 38,
            fontWeight: 850,
            lineHeight: 1,
            fontFamily: 'Inter, Arial, sans-serif',
          }}
        >
          NEWS
        </div>
        <div
          style={{
            color: '#9db7d8',
            fontSize: compact ? 13 : 16,
            fontWeight: 700,
            marginTop: 5,
            fontFamily: 'Inter, Arial, sans-serif',
          }}
        >
          GLOBAL BRIEFING
        </div>
      </div>
    </div>
  );
};
