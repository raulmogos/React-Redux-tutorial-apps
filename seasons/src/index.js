import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      positon => this.setState({
        latitude: positon.coords.latitude,
        longitude: positon.coords.longitude
      }),
      err => this.setState({errorMessage: err.message})
    );
  }

  renderContent() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.latitude &&  this.state.longitude) {
      return <SeasonDisplay lat={this.state.latitude} long={this.state.longitude} month={new Date().getMonth()}/>;
    }
    return <Spinner message='Please accept location request'/>;
  }

  render() {
    return (
      <div className='border red'>
        {this.renderContent()}
      </div>
    )
  }
    
}

ReactDOM.render(<App/>, document.querySelector('#root'));