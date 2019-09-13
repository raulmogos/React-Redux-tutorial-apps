import { combineReducers } from 'redux';

// reducers
const songsReducer = () => {
  return [
    { title: 'aaaaa', duration: '4:05' },
    { title: 'bbbbb', duration: '2:30' },
    { title: 'ccccc', duration: '6:50' },
    { title: 'ddddd', duration: '3:15' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});;
