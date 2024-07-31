import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.scss";

console.log("index.js is running");

document.addEventListener("DOMContentLoaded", function() {
  const el = document.getElementById("app");
  if (el) {
    console.log("Element found:", el);
    const root = createRoot(el);
    root.render(<App />);
  } else {
    console.error("Element with id 'app' not found");
  }
});
