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

// JSX, camelCase
// onchange attribute in HTML will be onChange in JavaScript
// onclick attribute in HTML will be onClick in JavaScript

// To fix the problem of vertical spacing, explicitly add white space as follows.
//  <p>
// 	Hello
// 	{ ‘ ‘ } JSX
// </p>
// This would become Hello JSX.

reportWebVitals();
