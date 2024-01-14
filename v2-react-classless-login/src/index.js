import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.scss";

const root = createRoot(document.getElementsByTagName("main")[0]);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
