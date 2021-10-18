import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YouTubeVideo extends Component {
    videoOnReady (event) {
      event.target.pauseVideo()
      console.log(event.target)
    }
  
    render () {
      const opts = {
        height: '720',
        width: '1280',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay:1
        }
      }
      const {videoId} = this.props
      return (
        <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        />
      )
    }
  }
  export default YouTubeVideo