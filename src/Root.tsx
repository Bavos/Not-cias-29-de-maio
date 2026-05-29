import React from 'react';
import {Composition} from 'remotion';
import {NewsVideo} from './compositions/NewsVideo';

export const Root: React.FC = () => {
  return (
    <Composition
      id="NewsVideo"
      component={NewsVideo}
      width={1080}
      height={1920}
      fps={30}
      durationInFrames={1350}
    />
  );
};
