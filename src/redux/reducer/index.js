let initialState = JSON.parse(localStorage.getItem("state")) || {
  data: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  replayAllData: [],
  nowReplayingData: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  replay: false,
  undo: [],
  redo: [],
  score: 0,
  winner: false,
  gameOver: false,
};

export default function gameInfo(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_NUMBER":
      return {
        ...state,
        data: action.payload,
        replayAllData: state.replayAllData.concat([action.payload]),
      };
    case "UPDATE_BOARD_DATA":
      return {
        ...state,
        data: action.payload,
        replayAllData: state.replayAllData.concat([action.payload]),
        undo: state.replayAllData[state.replayAllData.length - 1],
      };
    case "REPLAY_START":
      return {
        ...state,
        replay: true,
        nowReplayingData: action.payload,
      };
    case "REPLAY_STOP":
      return {
        ...state,
        replay: false,
        nowReplayingData: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      };
    case "UNDO":
      return {
        ...state,
        redo: state.data,
        data: state.undo,
        undo: [],
      };
    case "REDO":
      return {
        ...state,
        undo: state.data,
        data: state.redo,
        redo: [],
      };
    case "TAKE_GAME_ONE_STEP_BACK":
      return {
        ...state,
        replayAllData: state.replayAllData.slice(0, -1),
        redo: [],
      };
    case "RESET_GAME":
      localStorage.removeItem("state");
      return {
        data: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        replayAllData: [],
        nowReplayingData: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        replay: false,
        undo: [],
        redo: [],
        score: 0,
        winner: false,
        gameOver: false,
      };
    case "INCREASE_SCORE":
      localStorage.setItem(
        "highestScore",
        JSON.stringify(state.score + action.payload)
      );

      return {
        ...state,
        score: state.score + action.payload,
      };
    case "GAME_OVER":
      return {
        ...state,
        gameOver: !state.gameOver,
      };
    case "WINNER":
      return {
        ...state,
        winner: !state.winner,
      };
    case "CONTINUE_GAME":
      return {
        ...state,
        winner: false,
      };
    default:
      return state;
  }
}
