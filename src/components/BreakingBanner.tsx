import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const BreakingBanner: React.FC<{text: string}> = ({text}) => {
  const frame = useCurrentFrame();
  const x = interpolate(frame % 360, [0, 360], [0, -360]);

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 124,
        background: 'rgba(3, 10, 21, 0.92)',
        borderTop: '1px solid rgba(255,255,255,0.16)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      <div
        style={{
          height: '100%',
          width: 255,
          background: 'linear-gradient(135deg, #c61d35 0%, #8e1327 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: 1.5,
          flexShrink: 0,
        }}
      >
        URGENTE
      </div>
      <div
        style={{
          color: '#dce8f7',
          fontSize: 30,
          fontWeight: 720,
          whiteSpace: 'nowrap',
          transform: `translateX(${x}px)`,
          paddingLeft: 42,
        }}
      >
        {text} &nbsp;&nbsp;•&nbsp;&nbsp; {text} &nbsp;&nbsp;•&nbsp;&nbsp; {text}
      </div>
    </div>
  );
};
