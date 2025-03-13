import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // App.js import kiya
import "./index.css";  // index.js import kiya

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />  {/* App.js ko render kar rahe hain */}
  </React.StrictMode>
);
