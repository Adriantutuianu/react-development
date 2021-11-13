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
Props are read-only and immutable. They are used in customizing the React component while creating it.
If you want some immutable data in your React Component, add the props to the ReactDOM.render() method. Then use it inside the component.
Props make the React component more dynamic and more reusable. It is advised to use the camelCase formatting while you create your own React props.
Props are a common way of passing the data from the parent to the child component.
With props, you can pass the custom data to your React component.
The major purpose of the props in React is to provide the component diverse functionalities.
Props will also allow you to trigger the ‘state’ changes. We will later learn about ‘state’ in detail.
*/

reportWebVitals();
