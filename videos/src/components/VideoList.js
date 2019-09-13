import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {

  getRenderList = () => this.props.videos.map(video => <VideoItem key={video.id.videoId} video={video} />);

  render() {
    return(
      <div className="ui relaxed divided list">
        Video List:
        {this.getRenderList()}
      </div>
    )
  }
}

export default VideoList;