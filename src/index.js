import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FoxProvider } from "./context/FoxContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FoxProvider>
    <App />
  </FoxProvider>
);
