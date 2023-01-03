import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { ContextProvider } from "./socketContext";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
