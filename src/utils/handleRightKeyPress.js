import addNumber from "./addNumber";
import checkIfGameOver from "./checkGameOver";

const swipeRight = (data) => {
  let oldData = data;
  let newArray = data.map((arr) => arr.slice());

  for (let i = 3; i >= 0; i--) {
    let b = newArray[i];
    let slow = b.length - 1;
    let fast = slow - 1;
    while (slow > 0) {
      if (fast === -1) {
        fast = slow - 1;
        slow--;
        continue;
      }
      if (b[slow] === 0 && b[fast] === 0) {
        fast--;
      } else if (b[slow] === 0 && b[fast] !== 0) {
        b[slow] = b[fast];
        b[fast] = 0;
        fast--;
      } else if (b[slow] !== 0 && b[fast] === 0) {
        fast--;
      } else if (b[slow] !== 0 && b[fast] !== 0) {
        if (b[slow] === b[fast]) {
          b[slow] = b[slow] + b[fast];
          b[fast] = 0;
          fast = slow - 1;
          slow--;
        } else {
          slow--;
          fast = slow - 1;
        }
      }
    }
  }
  if (JSON.stringify(newArray) !== JSON.stringify(oldData)) {
    addNumber(newArray);
    if (checkIfGameOver(newArray)) {
      return false;
    }
  }
  return newArray;
};

export default swipeRight;
