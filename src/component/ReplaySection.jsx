import React, { Component } from "react";
import { GrPlayFill } from "react-icons/gr";
import { IoIosUndo, IoIosRedo } from "react-icons/io";

class ReplaySection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="replay_container">
        <div className="undo_button">
          <div className="icon">
            <IoIosUndo />
          </div>
          <div className="text">Undo</div>
        </div>
        <div className="replay_button">
          <div className="icon">
            <GrPlayFill className="icon" />
          </div>
          <div className="text">Replay</div>
        </div>
        <div className="redo_button">
          <div className="icon">
            <IoIosRedo />
          </div>
          <div className="text">Redo</div>
        </div>
      </section>
    );
  }
}

export default ReplaySection;
