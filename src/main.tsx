import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // 1. Added import
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 2. Wrap App in HelmetProvider so SEO tags work */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
