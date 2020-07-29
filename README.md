## 2048 Game

To play this game [Click Here](https://letsplay2048.netlify.app/)

#### Assests Directory

It contains all the scss, where each file name suggests to which component it belongs.
style.scss is the main scss file, where all other scss is imported.

---

#### Component Directory

It contains a total of 6 file

1. DashBoard.jsx - It's a file where all other components are imported and displayed according to the situation.
2. GameBoard.jsx - This component is where almost all the magic happens. This component is responsible for all the actions happing in the game.
3. GameOver..jsx - It's an overlay that shows game over message when the game is over.
4. ReplaySection.jsx - This is the bottom-most section of the game, where one can find the replay, undo, redo options.
5. correction.jsx - This section as the name suggests it display the game name, highest score, and current score.
6. Winner.jsx - This is an overlay that shows game-winning messages when one reaches 2048.

---

#### Redux Directory

It contains reducers and stores.

---

#### Utils Directory

It contains a total of 8 files.

1. addNumber.js - A function that receives board data and adds 2 at a random black position on the board and returns the data. if it cant add 2 then checks if the game is over or not, if the game is over return false.
2. calculateScore.js - A function that is used for calculating the score of the game.
3. calculateWinner.js - A function to decide the winner.
4. checkGameOver.js - A function to check if the game is over or not.
5. handleDownKeyPress.js - A function to handle down arrow key and swipe down in touch screen. Takes board data as parameter and returns new board data if game is not over else return false.
6. handleUpKeyPress.js - A function to handle up arrow key and swipe up in the touch screen. Takes board data as parameter and returns new board data if game is not over else return false.
7. handleLeftKeyPress.js - A function to handle left arrow key and swipe left in touch screen. Takes board data as parameter and returns new board data if game is not over else return false.
8. handleRightKeyPress.js - A function to handle the right arrow key and swipe right in touch screen. Takes board data as parameter and returns new board data if game is not over else return false.
