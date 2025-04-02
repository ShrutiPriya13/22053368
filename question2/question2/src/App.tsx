import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom"; // Removed BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analytics" element={<Analytics />} />
            </Routes>
        </>
    );
};

export default App;
