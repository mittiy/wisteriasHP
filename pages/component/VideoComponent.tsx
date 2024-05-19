

import React from 'react';

interface VideoComponentProps {
  src: string; // 動画ファイルのURL
  poster?: string; // ビデオのプレビューイメージのURL（オプション）
  alt: string; // ビデオの説明（アクセシビリティ向上のため）
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, poster, alt }) => {
  return (
    <video controls poster={poster} style={{ maxWidth: '100%', height: 'auto' }}>
      <source src="HPtopAnimation.mp4" type="video/mp4" />
      {alt}
    </video>
  );
};

export default VideoComponent;
