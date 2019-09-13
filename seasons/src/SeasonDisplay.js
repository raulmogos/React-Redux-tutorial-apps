import './SeasonDisplay.css';

import React from 'react';


const seasonConfig = {
  summerName: 'summer',
  winterName: 'winter',
  summer: {
    text: "Let's hit the beach !",
    iconName: 'sun'
  },
  winter: {
    text: "Burr, it's chilly !",
    iconName: 'snowflake'
  }
};

class SeasonDisplay extends React.Component {
  state = {
    season: null,
    text: '',
    iconName: ''
  };

  getSeason() {
    let season;
    if (this.props.month > 2 && this.props.month < 9) {
      season = this.props.lat > 0 ? seasonConfig.summerName : seasonConfig.winterName
    } else {
      season = this.props.lat > 0 ? seasonConfig.winterName : seasonConfig.summerName;
    }
    return season;
  }

  componentDidMount() {
    let season = this.getSeason()
    
    this.setState({
      season,
      text: seasonConfig[season].text,
      iconName: seasonConfig[season].iconName,
    });
  }

  render() {
    return (
      <div className={`season-display ${this.state.season}`}>
        <i className={`icon-left massive ${this.state.iconName} icon`}></i>
        <h1>{this.state.text}</h1>
        <i className={`icon-right massive ${this.state.iconName} icon`}></i>
      </div>
    );
  }
}

export default SeasonDisplay;