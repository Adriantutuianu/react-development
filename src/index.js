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
Stateful React components are always Class Components!
These components have a state. The state should be initialized in the constructor.
You shouldn't stop with just this initialization of the state. That will not help you create an interactive user interface.
You need to update the state. Updating the states will allow you to create a highly responsive and interactive React JS application.*/

reportWebVitals();
