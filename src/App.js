import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import RelatedVideos from './components/RelatedVideos/RelatedVideos';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        videoId:'',
        title:'',
      }
  }

  componentDidMount() {
    this.searchVideo('software development')
  }

  searchVideo = async (searchQuery) => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&part=snippet&key=AIzaSyAOuwBnrH2YALvXHvlxOkw01CsrAQ6ezM8`);
    let allVideos = response.data;

    this.getRelatedVideos({
      videoId: allVideos.items[0].id.videoId,
      title: allVideos.items[0].snippet.title,
    })

    
  }
  getRelatedVideos = async (video) =>{
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video.videoId}&type=video&part=snippet&key=AIzaSyAOuwBnrH2YALvXHvlxOkw01CsrAQ6ezM8`);
    let relatedVideos = response.data.items.filter(video => video.snippet);
    let relatedVideosArray = relatedVideos.map((video) =>{
      return ({
        videoId: video.id.videoId,
        title: video.snippet.title,
      });
    });
    this.setState({
      videoId: video.videoId,
      title: video.title,
    })

  }

  render() { 
    return (
      <div className="bg-secondary ">
        <React.Fragment>
        <br />
          <br />
          <div>
          <SearchBar searchVideo={this.searchVideo}/>
          </div>
          <br />
          <br />
          <br />
          <div className="App-container">
          <iframe class="border border-primary" id="ytplayer" title="title" type="text/html" width="1280" height="720"
              src={`https://www.youtube.com/embed/${this.state.videoId}?`}
              frameborder="0"></iframe>
          </div>
          <div className="container">
          <h2>{this.state.title}</h2>
          </div>
          <br />
        </React.Fragment>
      </div>
    );
  }
}

export default App;