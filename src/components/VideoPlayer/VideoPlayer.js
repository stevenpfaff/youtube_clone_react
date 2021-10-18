import React, { Component } from 'react';

export const VideoPlayer = (props) => {
  const { videoId, title } = props;

  if (!videoId) {
    return null;
  }

  return (
    <div>
      <iframe
        id="ytplayer"
        title={title}
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}