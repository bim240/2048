import React, { Component } from "react";

class ScoreSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="game_header">
          <div className="game_name">2048</div>
          <div className="score_section">
            <div className="current_score">
              <div>Score</div>
              <div className="score_num">5878</div>
            </div>
            <div className="best_score">
              <div> Best</div>
              <div className="score_num">5878</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ScoreSection;
