import { createStore } from "redux";

import gameInfo from "./reducer";

export let store = createStore(gameInfo);
