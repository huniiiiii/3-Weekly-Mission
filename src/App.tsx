import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Folder from "./pages/Folder";
import Shared from "./pages/Shared";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/shared" element={<Shared />} />
                    <Route path="/folder" element={<Folder />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
