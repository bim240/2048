import checkIfGameOver from "./checkGameOver";

const { default: addNumber } = require("./addNumber");

const swipeUp = (data) => {
  let b = data.map((arr) => arr.slice());
  let oldData = JSON.parse(JSON.stringify(data));
  for (let i = 0; i < 4; i++) {
    let slow = 0;
    let fast = 1;
    while (slow < 4) {
      if (fast === 4) {
        fast = slow + 1;
        slow++;
        continue;
      }
      if (b[slow][i] === 0 && b[fast][i] === 0) {
        fast++;
      } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
        b[slow][i] = b[fast][i];
        b[fast][i] = 0;
        fast++;
      } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
        fast++;
      } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
        if (b[slow][i] === b[fast][i]) {
          b[slow][i] = b[slow][i] + b[fast][i];
          b[fast][i] = 0;
          fast = slow + 1;
          slow++;
        } else {
          slow++;
          fast = slow + 1;
        }
      }
    }
  }
  if (JSON.stringify(oldData) !== JSON.stringify(b)) {
    addNumber(b);
    if (checkIfGameOver(b)) {
      return false;
    }
  }
  return b;
};

export default swipeUp;
