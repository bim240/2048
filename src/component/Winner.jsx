import React from "react";
import { connect } from "react-redux";
import addNumber from "../utils/addNumber";

const Winner = (props) => {
  const hanldeContinueGame = () => {
    props.dispatch({ type: "CONTINUE_GAME" });
  };
  const handleRestartGame = () => {
    props.dispatch({ type: "RESET_GAME" });
    var newData = addNumber([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
    newData = addNumber(newData);
    props.dispatch({ type: "ADD_NEW_NUMBER", payload: newData });
    props.setShouldCheckWinner(true);
  };

  return (
    <>
      <section className="winner_container">
        <h4 className="winner_title">You Won!!</h4>
        <div className="btn_continue_game" onClick={hanldeContinueGame}>
          Continue
        </div>
        <div className="btn_restart_game" onClick={handleRestartGame}>
          Restart
        </div>
      </section>
    </>
  );
};

export default connect()(Winner);
