import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

import addNumber from "../utils/addNumber";

function GameBoard(props) {
  let [data, setData] = useState(props.data);
  const initializeAddNumber = () => {
    if (data) {
      let newData = addNumber(
        data.map(function (arr) {
          return arr.slice();
        })
      );
      newData = addNumber(
        newData.map(function (arr) {
          return arr.slice();
        })
      );
      setData(newData);
      props.dispatch({ type: "ADD_NEW_NUMBER", payload: newData });
    }
  };

  useEffect(() => {
    initializeAddNumber();
  }, []);
  return (
    <>
      {data ? (
        <div className="number_conatiner">
          {data.map((row) => {
            return (
              <div className="number_row" key={uuid()}>
                {row.map((digit) => {
                  return (
                    <div className={`single_block b${digit}`} key={uuid()}>
                      {digit !== 0 ? digit : ""}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="number_conatiner">
          {[
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
          ].map((row) => {
            return (
              <div className="number_row">
                {row.map((digit) => {
                  return (
                    <div className={`single_block ${digit}`}>
                      {digit !== 0 ? digit : ""}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
function mapStateToProps(state) {
  // console.log(state.data);
  return {
    data: state.data,
  };
}
export default connect(mapStateToProps)(GameBoard);
