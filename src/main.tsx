import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client"; // Added hydrateRoot
import { HelmetProvider } from "react-helmet-async";
import App from "./app/App.tsx";
import "./styles/index.css";

const container = document.getElementById("root")!;

// This check handles the transition from static HTML to live React
if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  createRoot(container).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}
