import axios from 'axios'

const KEY = 'AIzaSyB2BDWxuZ3xExPVdByrA_ynVBt1fmDp9kw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 9,
    key: KEY
  }
});
