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

The Synthetic events also ensure high performance to the React applications.
How do synthetic events achieve high performance?
The performance is achieved automatically using the Event Delegation.
Event delegation is a technique for listening to events where the parent element is delegated as the listener.
The parent element is chosen as the listener for all the events that happen within it. A single event listener is attached to the root of the document.



*/

reportWebVitals();
