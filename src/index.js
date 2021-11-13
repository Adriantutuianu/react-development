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
A good strategy to pass all the props from the parent component to the child component is through the use of JavaScript spread operator.
This spread operator is a powerful feature in React JS. This feature comes from JavaScript.
The props spreading is used in spreading a whole object with the key value pairs down to the child React component.
The spread operator will have the same effect as passing each value of the object on its own to the component.
The syntax of the spread operator is easy and is less prone to errors.
In addition, the JavaScript spread operator offers a great level of flexibility to React JS.
You need not change the name of the props or add the props in the intermediate component.
*/

reportWebVitals();
