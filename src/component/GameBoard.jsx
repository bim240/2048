import React, { Component } from "react";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="number_conatiner">
          <div className="number_row">
            <div className="single_block">1</div>
            <div className="single_block">2</div>
            <div className="single_block">2</div>
            <div className="single_block">2</div>
          </div>
          <div className="number_row">
            <div className="single_block">1</div>
            <div className="single_block">2</div>
            <div className="single_block">2</div>
            <div className="single_block">2</div>
          </div>
          <div className="number_row">
            <div className="single_block">1</div>
            <div className="single_block">2</div>
            <div className="single_block">2</div>
            <div className="single_block">2</div>
          </div>
          <div className="number_row">
            <div className="single_block">1</div>
            <div className="single_block">2</div>
            <div className="single_block">2</div>
            <div className="single_block">2</div>
          </div>
        </div>
      </>
    );
  }
}

export default GameBoard;
