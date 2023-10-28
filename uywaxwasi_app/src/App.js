import React from "react";
import MedicDetailsPage from "./pages/MedicDetailsPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/medicalhistory" element={<MedicDetailsPage/>} />
      </Routes>
    </Router>
  )
  
}

export default App;
