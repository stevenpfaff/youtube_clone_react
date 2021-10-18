import React, {useState} from 'react';
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';


export const App = () => {
  const [searchResults] = useState(null);
  console.log(searchResults);

  const videoId = getVideoId(searchResults);
  return (
    <div className="App-container">
      <SearchBar />
      <VideoPlayer videoId={videoId} />
      
    </div>
  )
}

const defaultVideoId = 'bn-DQCifeQQ';

function getVideoId(searchResult) {
  console.log('getVideoId:', searchResult);

  if (!searchResult) {
    return defaultVideoId;
  }
  if (searchResult.items.length === 0) {
    return defaultVideoId;
  }

  return searchResult.items[0].id.videoId;
}
export default App;