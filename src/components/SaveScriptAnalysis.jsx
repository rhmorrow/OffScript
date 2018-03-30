import React from 'react';
import axios from 'axios';

class SaveScriptAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.saveAnalysis = this.saveAnalysis.bind(this);
  }

  saveAnalysis(e) {
    e.preventDefault();
    console.log('this.props', this.props.userId);
    axios.post('/postanalysis', {
      script: this.props.script,
      transcript: this.props.transcript,
      data: this.props.data,
      comparison: this.props.comparison,
      currentUserId: this.props.userId
    })
    .then((res) => {
      console.log('analysis saved to db', res);
    })
    .catch((err) => {
       console.log('error saving analysis to db', err);
     })
  }

  render() {
    return (
      <div id="myAccount">
        <div className="modal-footer transparent">
          <a className="btn waves-effect black" onClick={this.saveAnalysis}>Save Analysis</a>
        </div>
      </div>
    )
  }

}

module.exports = SaveScriptAnalysis;