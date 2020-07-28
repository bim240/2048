import addNumber from "./addNumber";

const swipeDown = (data) => {
  let b = data.map((arr) => arr.slice());
  let oldData = JSON.parse(JSON.stringify(data));
  for (let i = 3; i >= 0; i--) {
    let slow = b.length - 1;
    let fast = slow - 1;
    while (slow > 0) {
      if (fast === -1) {
        fast = slow - 1;
        slow--;
        continue;
      }
      if (b[slow][i] === 0 && b[fast][i] === 0) {
        fast--;
      } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
        b[slow][i] = b[fast][i];
        b[fast][i] = 0;
        fast--;
      } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
        fast--;
      } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
        if (b[slow][i] === b[fast][i]) {
          b[slow][i] = b[slow][i] + b[fast][i];
          b[fast][i] = 0;
          fast = slow - 1;
          slow--;
        } else {
          slow--;
          fast = slow - 1;
        }
      }
    }
  }
  if (JSON.stringify(b) !== JSON.stringify(oldData)) {
    if (addNumber(b)) {
      console.log("gameover in keypree");
      return false;
    }
  }
  return b;
};

export default swipeDown;
