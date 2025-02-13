import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import Home from "./Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;