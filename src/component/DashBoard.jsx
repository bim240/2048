import React from "react";

import ReplaySection from "./ReplaySection";
import ScoreSection from "./ScoreSection";
import GameBoard from "./GameBoard";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="dashboard_parent_conatiner">
        <div className="dashboard_contanier">
          <ScoreSection />
          <div className="game_dispciption">
            {" "}
            Join the number and get to <b>2048 title!</b>
          </div>
          <GameBoard />
          <ReplaySection />
        </div>
      </section>
    );
  }
}

export default DashBoard;
