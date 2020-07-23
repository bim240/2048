import React from "react";
import ReactDOM from "react-dom";

import ServiceWorkerWrapper from "./serviceWorkerWrapper";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ServiceWorkerWrapper />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
