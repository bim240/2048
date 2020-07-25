import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import gameInfo from "./reducer";

export let store = createStore(gameInfo, applyMiddleware(thunk));
