import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const useEntranceAnimation = (delay = 0) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const localFrame = Math.max(0, frame - delay);

  const bounce = spring({
    frame: localFrame,
    fps,
    config: {
      damping: 12,
      mass: 0.7,
      stiffness: 160,
    },
  });

  const opacity = interpolate(localFrame, [0, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const y = interpolate(localFrame, [0, 18], [70, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return {bounce, opacity, y};
};
