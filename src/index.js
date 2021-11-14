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
Another major difference between the props and state is that the props are set by the parent component.
Props set by the parent component are then used by the child components.
When the user presses a key or performs a mouse click, the state of the component is changed.
In a React component, the props are the variables which get passed to it by its parent Components.
But State is still the variable that gets directly initialized and managed by the React component.




*/

reportWebVitals();
