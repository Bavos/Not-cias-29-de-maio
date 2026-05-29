import React from 'react';

export const LowerThird: React.FC<{section: string; date: string}> = ({section, date}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 64,
        right: 64,
        bottom: 150,
        height: 78,
        borderRadius: 20,
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.14)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        fontFamily: 'Inter, Arial, sans-serif',
        boxShadow: '0 18px 45px rgba(0,0,0,0.24)',
      }}
    >
      <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: '#d92743',
            boxShadow: '0 0 20px rgba(217,39,67,0.7)',
          }}
        />
        <span style={{color: '#ffffff', fontSize: 24, fontWeight: 860, letterSpacing: 1.8}}>
          {section}
        </span>
      </div>
      <span style={{color: '#a8bdd7', fontSize: 22, fontWeight: 650}}>{date}</span>
    </div>
  );
};
