import React from 'react';
import Chart from './Chart.jsx';

class Analytics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <a href="/upload" className="waves-effect btn cyan accent-4 hoverable"><i className="material-icons left">refresh</i>One more time</a>
        <h4 className="analytics-title">Detailed Analysis</h4>
        <div className="analytics-wrapper">
          <div className="card-panel analytics">
            <h5>Score</h5>
            <Chart
              data={this.props.results.scoreData}
              charttype={"doughnut"}
            />
          </div>
          <div className="card-panel analytics">
            <h5>Social Tones</h5>
            <Chart
              scriptdata={this.props.results.scriptData}
              transdata={this.props.results.transData}
              charttype={"radar"}
            />
          </div>
          <div className="card-panel analytics">
            <h5>Script Emotion Tones</h5>
            <Chart
              data={this.props.results.scriptEmotion}
              charttype={"pie"}
            />
          </div>
          <div className="card-panel analytics">
            <h5>Transcript Emotion Tones</h5>
            <Chart
              data={this.props.results.transEmotion}
              charttype={"pie"}
            />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Analytics;