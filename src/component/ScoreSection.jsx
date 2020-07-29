import React from "react";
import { connect } from "react-redux";

function ScoreSection(props) {
  return (
    <>
      <div className="game_header">
        <div className="game_name">2048</div>
        <div className="score_section">
          <div className="current_score">
            <div>Score</div>
            <div className="score_num">{props.score}</div>
          </div>
          <div className="best_score">
            <div> Best</div>
            <div className="score_num">
              {JSON.parse(localStorage.getItem("highestScore")) > 230296
                ? JSON.parse(localStorage.getItem("highestScore"))
                : 230296}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    score: state.score,
  };
}

export default connect(mapStateToProps)(ScoreSection);
