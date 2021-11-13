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
React elements have four major properties namely type, key, ref, and props.
type, this will be a string that represents a HTML tag or referencing a React component.
key, this property will hold a string that helps in uniquely identifying a React element.
ref, this will be a reference to the instance of the React component and props will refer to the properties of the object.
*/

reportWebVitals();
