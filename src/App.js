import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";
import AboutUs from "./pages/AboutUs";
import CoachPage from "./pages/CoachPage";
import ChoreographersPage from "./pages/ChoreographersPage";
import UploadVideo from "./components/UploadVideo.1";
import SchedulePage from "./pages/SchedulePage";
import LearnPage from "./pages/Learn";
import MPPass from "./pages/MPPassPage";



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/coach" element={<CoachPage />} />
        <Route path="/learn/*" element={<LearnPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/uploadvideo" element={<UploadVideo />} />
        <Route path="/choreographers" element={<ChoreographersPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/mp_pass" element={<MPPass />} />
        
      </Routes>
      
    </Router>
       
  );
}

export default App;
