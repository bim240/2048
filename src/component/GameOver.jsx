import React from "react";
import { connect } from "react-redux";
import addNumber from "../utils/addNumber";

const GameOver = (props) => {
  const hanldeGameReset = () => {
    props.dispatch({ type: "RESET_GAME" });
    var newData = addNumber([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
    newData = addNumber(newData);
    props.dispatch({ type: "ADD_NEW_NUMBER", payload: newData });
  };

  return (
    <>
      <section className="game_over_container">
        <h3 className="game_over_title">Game Over!!!</h3>
        <div className="btn_game_over_reset" onClick={hanldeGameReset}>
          Retry
        </div>
      </section>
    </>
  );
};

export default connect()(GameOver);
