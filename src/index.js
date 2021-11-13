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
First, What is a state in React?
In React JS, the state is an instance of the React Component Class.
Remember, the state is limited to the current component only!
A state is an object that controls the behavior of the React Component. A component can initialize the state and update it when required.
*/

reportWebVitals();
