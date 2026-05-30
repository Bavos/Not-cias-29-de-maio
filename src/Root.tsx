import React from 'react';
import {Composition} from 'remotion';
import {AIBriefingVideo} from '../remotion/compositions/AIBriefingVideo';
import {VIDEO_DURATION_FRAMES, VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH} from '../remotion/utils/videoConfig';

export const Root: React.FC = () => {
  return (
    <Composition
      id="AIBriefingVideo"
      component={AIBriefingVideo}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
      fps={VIDEO_FPS}
      durationInFrames={VIDEO_DURATION_FRAMES}
    />
  );
};
