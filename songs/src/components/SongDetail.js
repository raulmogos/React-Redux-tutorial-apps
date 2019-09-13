import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
  render() {
    console.log(this.props);
    return (
      this.props.song ? (
        <div>
          <h3>Details for:</h3>
          <div>{this.props.song ? this.props.song.title : 'no title'}</div>
          <div>{this.props.song ? this.props.song.duration : 'no duration'}</div>
        </div>
      ) : <div> No song selected </div>
    );
  }
}

export default connect((state) => {
  return {
    song: state.selectedSong
  }
})(SongDetail);