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

/*Yes, JSX (Javascript XML) is a Javascript expression. You need to wrap the expression within the curly brackets ( { } )
You may not use ‘if else’ statements inside the JSX. Instead, you can use ‘ternary expression’.
<h1> { val==1? ‘True’: ‘False’ } </h1>
The above is an example of the ternary expression. If the value of ‘val’ variable is one, then the result is true, else false.
*/

reportWebVitals();
