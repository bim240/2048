let initialState = {
  data: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

export default function gameInfo(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_NUMBER":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
