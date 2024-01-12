import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

console.log('webpack entering')

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
