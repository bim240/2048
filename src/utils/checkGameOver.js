const { default: swipeLeft } = require("./handleLeftKeyPress");
const { default: swipeDown } = require("./handleDownKeyPress");
const { default: swipeRight } = require("./handleRightKeyPress");
const { default: swipeUp } = require("./hanldeUpKeyPress");

const checkIfGameOver = (data) => {
  let checker = swipeLeft(data);

  if (JSON.stringify(data) !== JSON.stringify(checker)) {
    return false;
  }

  let checker2 = swipeDown(data);

  if (JSON.stringify(data) !== JSON.stringify(checker2)) {
    return false;
  }

  let checker3 = swipeRight(data);

  if (JSON.stringify(data) !== JSON.stringify(checker3)) {
    return false;
  }

  let checker4 = swipeUp(data);

  if (JSON.stringify(data) !== JSON.stringify(checker4)) {
    return false;
  }

  return true;
};

export default checkIfGameOver;
