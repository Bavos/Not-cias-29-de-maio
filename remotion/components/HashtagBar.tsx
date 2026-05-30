import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {googleColors} from '../utils/videoConfig';

export const HashtagBar: React.FC<{hashtags: string[]; top?: number}> = ({hashtags, top = 1690}) => {
  const frame = useCurrentFrame();
  const x = interpolate(frame % 210, [0, 210], [80, -580]);
  const allTags = [...hashtags, ...hashtags];

  return (
    <div style={{position: 'absolute', top, left: 0, width: 1080, overflow: 'hidden'}}>
      <div style={{display: 'flex', gap: 18, transform: `translateX(${x}px)`, whiteSpace: 'nowrap'}}>
        {allTags.map((tag, index) => (
          <div
            key={`${tag}-${index}`}
            style={{
              padding: '16px 24px',
              borderRadius: 999,
              background: index % 4 === 0 ? googleColors.blue : index % 4 === 1 ? googleColors.red : index % 4 === 2 ? googleColors.yellow : googleColors.green,
              color: index % 4 === 2 ? googleColors.dark : googleColors.white,
              fontWeight: 950,
              fontSize: 32,
              boxShadow: '0 14px 30px rgba(0,0,0,0.22)',
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
