import React from "react";
import { connect } from "react-redux";
import ReplaySection from "./ReplaySection";
import ScoreSection from "./ScoreSection";
import GameBoard from "./GameBoard";
import addNumber from "../utils/addNumber";
import { addnewNumber } from "../redux/action";

function DashBoard(props) {
  const hanldeResetGame = () => {
    if (!props.replay) {
      props.dispatch({ type: "RESET_GAME" });
      var newData = addNumber([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]);
      newData = addNumber(newData);
      props.dispatch(addnewNumber(newData));
    }
  };

  return (
    <section className="dashboard_parent_conatiner">
      <div className="dashboard_contanier">
        <ScoreSection />
        <div className="game_dispciption">
          {" "}
          Join the number and get to <b>2048 title!</b>{" "}
          <button onClick={hanldeResetGame}>Reset</button>
        </div>
        <GameBoard />
        <ReplaySection />
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    replay: state.replay,
  };
}
export default connect(mapStateToProps)(DashBoard);
