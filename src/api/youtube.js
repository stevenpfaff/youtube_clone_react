import axios from 'axios'
const KEY = 'AIzaSyAVsPjWBYDx9N3nDG-3ZYERTq3YqPZRP0k'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params :{
        part: 'snippet',
        maxResults: 5,
        key: KEY
}});