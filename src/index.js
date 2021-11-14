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
setState() is the legit way to update the state of the React Component.
The state of the component needs to be updated as a response to the event handlers.
setState() adds the changes to the state of the component.
It then tells React that the component and its children need to be re-rendered, now with the updated state.
*/

reportWebVitals();
