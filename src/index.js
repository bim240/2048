import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ServiceWorkerWrapper from "./serviceWorkerWrapper";
import App from "./App";
import { store } from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ServiceWorkerWrapper />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
