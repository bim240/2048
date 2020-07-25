import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

import addNumber from "../utils/addNumber";

function GameBoard(props) {
  let [data, setData] = useState(props.data);
  // console.log(data, "data");
  const initializeAddNumber = () => {
    // console.log("CALLING INITIALIZE");
    // console.log(data);
    if (data) {
      let newData = addNumber(data);
      newData = addNumber(newData);
      console.table(newData);
      setData(newData);
      props.dispatch({ type: "ADD_NEW_NUMBER", payload: newData });
    }
  };

  useEffect(() => {
    initializeAddNumber();
    // console.log("useeffect");
  });
  return (
    <>
      {data ? (
        <div className="number_conatiner">
          {/* {console.log(data, "return", data[0][0])} */}
          {data.map((row, index1) => {
            console.log(row, "row");
            return (
              <div className="number_row" key={uuid()}>
                {/* {console.log(row, "row")} */}
                {row.map((digit, index2) => {
                  return (
                    <div className={`single_block ${digit}`} key={uuid()}>
                      {console.log(digit, "digit")}
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
