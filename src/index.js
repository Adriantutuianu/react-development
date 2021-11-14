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
‘State’ is private to a React component!. In this aspect, props and state differ.
The value of the ‘State’ is solely controlled by only the component.
We know that React is immutable. So, the state should never be changed directly, changes must be made only to the copy of the current version of the state.
This will allow you to review the state at a different point in time. This will help you while building huge React applications.
The state can thus be defined as a set of observable properties which control the behavior of the React component.
The information held by the state object may change over the lifetime of the React component.
States can be used only in class-based components! You cannot use states in functional React components.

*/

reportWebVitals();
