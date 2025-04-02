import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter here
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./App.css";
import "./components/Navbar.css";
import "./pages/Home.css";
import "./pages/Analytics.css";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

