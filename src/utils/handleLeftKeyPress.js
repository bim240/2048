import addNumber from "./addNumber";
import checkIfGameOver from "./checkGameOver";

// const swipeLeft = (data) => {
//   let oldGrid = data;
//   let newArray = data.map((arr) => arr.slice());

//   for (let i = 0; i < 4; i++) {
//     let b = newArray[i];
//     let slow = 0;
//     let fast = 1;
//     while (slow < 4) {
//       if (fast === 4) {
//         fast = slow + 1;
//         slow++;
//         continue;
//       }
//       if (b[slow] === 0 && b[fast] === 0) {
//         fast++;
//       } else if (b[slow] === 0 && b[fast] !== 0) {
//         b[slow] = b[fast];
//         b[fast] = 0;
//         fast++;
//       } else if (b[slow] !== 0 && b[fast] === 0) {
//         fast++;
//       } else if (b[slow] !== 0 && b[fast] !== 0) {
//         if (b[slow] === b[fast]) {
//           b[slow] = b[slow] + b[fast];
//           b[fast] = 0;
//           fast = slow + 1;
//           slow++;
//         } else {
//           slow++;
//           fast = slow + 1;
//         }
//       }
//     }
//   }
//   if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
//     addNumber(newArray);
//     if (checkIfGameOver(newArray)) {
//       return false;
//     }
//   }
//   return newArray;
// };

export default swipeLeft;

function swipeLeft(data) {
  let oldGrid = data;
  let newArray = data.map((arr) => arr.slice());

  for (let i = 0; i < 4; i++) {
    let b = newArray[i];
    let slow = 0;
    let fast = 1;
    while (slow < 4) {
      switch (true) {
        case fast === 4:
          fast = slow + 1;
          slow++;
        case b[slow] === 0 && b[fast] === 0:
          fast++;
          break;
        case b[slow] === 0 && b[fast] !== 0:
          b[slow] = b[fast];
          b[fast] = 0;
          fast++;
          break;
        case b[slow] !== 0 && b[fast] === 0:
          fast++;
          break;
        case b[slow] !== 0 && b[fast] !== 0:
          if (b[slow] === b[fast]) {
            b[slow] = b[slow] + b[fast];
            b[fast] = 0;
            fast = slow + 1;
            slow++;
          } else {
            slow++;
            fast = slow + 1;
          }
          break;
        default:
          break;
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      addNumber(newArray);
      if (checkIfGameOver(newArray)) {
        return false;
      }
    }
    return newArray;
  }
}
