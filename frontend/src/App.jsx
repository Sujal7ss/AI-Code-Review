import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import Review from "./pages/Review.jsx";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        
        <Route path="review" element={<Review />} />
      </Routes>
    </>
  );
}

export default App;
