import React, { Component } from 'react'
import './App.css'
import YouTubeVideo from './components/YouTube/YouTube'
import OffCanvasExample from './components/Bootstrap/bootstrap'


class App extends Component {
  render () {
    return (
      <div className='App-container'>
        <YouTubeVideo videoId='OksMOR5emE8' />
      </div>
    )
  }
}

export default App
