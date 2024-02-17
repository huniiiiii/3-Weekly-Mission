import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

window.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
    }
});
