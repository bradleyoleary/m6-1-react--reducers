import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { SeatContext } from "./components/SeatContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <SeatContext>
    <App />
  </SeatContext>,
  rootElement
);
