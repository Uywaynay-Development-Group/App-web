import React from "react";
import MedicDetailsPage from "./pages/MedicDetailsPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage"
import LandingPage from "./pages/LandingPage";
import PetsPage from "./pages/PetsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ComunityPage from "./pages/ComunityPage";
import FormUpdate from "./components/medic_details/FormUpdate";
import UpdatePetsForm from "./components/pets_page/UpdatePetsForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LogInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/medicalhistory" element={<MedicDetailsPage/>} />
        <Route path="/medicalhistory-update/:vaccineId" element={<FormUpdate/>} />
        <Route path="/pets" element={<PetsPage/>} />
        <Route path="/pets-update/:petId" element={<UpdatePetsForm/>} />
        <Route path="/activities" element={<ActivitiesPage/>} />
        <Route path="/comunity" element={<ComunityPage/>} />
      </Routes>
    </Router>
  )
  
}

export default App;
