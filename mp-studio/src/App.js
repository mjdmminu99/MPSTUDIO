import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    //   <div className="app">
    //     <HomePage />
    //   </div>
  );
}

export default App;
