import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";
import AboutUs from "./pages/AboutUs";
import CoachPage from "./pages/CoachPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/coach" element={<CoachPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    //   <div className="app">
    //     <HomePage />
    //   </div>
  );
}

export default App;
