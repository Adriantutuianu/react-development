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
Of the few HTML elements, Forms are the most interactive element by default.
In real-time forms are designed to allow the users to interact well with a web page.
Forms are commonly used in login and registration windows, during the checkout and shopping cart screen of e-commerce websites.
Contact forms are also common. These forms are present in almost all websites.
Forms are used in the webpages for the user to enter the details.
Once entered and submitted, the form details are sent to the server for processing.
The data entered in the form needs to be in the perfect format.
In addition, some fields need to be compulsorily filled by the user.
Some mandatory form fields are username and password details.
Validating the forms can be handled using the handleChange method.
You will access the old and the new value of the state.
Then you need to check the new value and if found invalid, reject the updated new value. In addition, communicate this scenario to the user.
onChange: This event gets fired whenever there is some change in any of the input element on the form.
onChange is the widely used event during the validation of the form.
onInput: This event gets fired automatically for every change that happens in the <input> elements and the <textarea>
onInput event is not recommended to be used! Puzzled?

*/

reportWebVitals();
