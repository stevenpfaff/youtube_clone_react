import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar'
import RelatedVideos from './components/RelatedVideos/RelatedVideos'
import Comments from './components/Comments/Comments';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        videoId: '',
        videoTitle: '',
        videoDescription: '',
        relatedVideos: [],
      
      }
  }

  componentDidMount() {
    this.searchVideo('Juice WRLD - Wishing Well (Official Music Video)')
  }

  searchVideo = async (searchQuery) => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&part=snippet&key=AIzaSyAVsPjWBYDx9N3nDG-3ZYERTq3YqPZRP0k`);
    let allVideos = response.data;

    this.getRelatedVideos({
      videoId: allVideos.items[0].id.videoId,
      videoTitle: allVideos.items[0].snippet.title,
      videoDescription: allVideos.items[0].snippet.description,
    })

  }

  getRelatedVideos = async (videoData) => { 
    let response = await axios.get (`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoData.videoId}&type=video&part=snippet&key=AIzaSyAIfh92bqWo0T_AbXjELe4jIF2iDLZvb18`);
    let relatedVideos = response.data.items.filter(video => video.snippet);
    let relatedVideosArray = relatedVideos.map((video) => {
      return ({
          videoId: video.id.videoId,
          videoTitle: video.snippet.title,});
      });
      this.setState({
        videoId: videoData.videoId,
        videoTitle: videoData.videoTitle,
        videoDescription: videoData.videoDescription,
        relatedVideos: relatedVideosArray
    })
  }

  render() { 
    return (
      <div className="bg-secondary ">
        <React.Fragment>
        <br />
          <br />
          <div className="container bg-light text-dark border border-primary">
          <u><h1 className="marquee">YouTube Clone</h1></u>
          <br />
          <SearchBar searchVideo={this.searchVideo}/>
          </div>
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-center">
          <iframe class="border border-primary" id="ytplayer" title="title" type="text/html" width="1080" height="720"
              src={`https://www.youtube.com/embed/${this.state.videoId}?`}
              frameborder="0"></iframe>
          </div>
          <div className="container">
          <h2>{this.state.videoTitle}</h2>
          <h3>{this.state.videoDescription}</h3>
          </div>
          <br />
          <br />
          <Comments videoId={this.state.videoId}/>
          <div className="container bg-light text-dark border border-primary">
          <RelatedVideos relatedVideos={this.state.relatedVideos} />
          </div>
          <br />
          <br />
        </React.Fragment>
      </div>
    );
  }
}

export default App;