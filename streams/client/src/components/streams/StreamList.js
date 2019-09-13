import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    return stream.userId === this.props.currentUserId && (
      <div className="right floated content">
        <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
          Edit
        </Link>
        <button className="ui button negative">
          Delete
        </button>
      </div>
    );
  }

  renderList() {
    return this.props.streams.map((stream, index) => (
      <div className="item" key={index}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ))
  }

  renderCreate() {
    return this.props.isSignedIn && (
      <div style={{ textAlign: 'center' }}>
        <Link to="/streams/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
