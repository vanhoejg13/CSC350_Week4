import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*
Purpose: Renders the React app to the page.
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);