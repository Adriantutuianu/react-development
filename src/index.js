import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/*

Some of the interesting Keyboard events in React JS includes onKeyDown, onKeyPress and onKeyup.
onKeyDown event is called whenever a key is depressed by the user.
onKeyPress gets called after the key is released by the user before onKeyup gets triggered.
onKeyUp is called at the last, once the key is pressed by the user.

*/

reportWebVitals();
