import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Route here

import ViewAdmissions from "./ViewAdmissions";
import ViewTeachers from "./ViewTeachers";
import ViewTeacherDetails from "./ViewTeacherDetails";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";


const Admin = () => {
  return (
    <div className="App" >
      <Navbar />
     
      <Routes>
        <Route path="/" element={ <Dashboard />} />
        <Route path="admission-data" element={<ViewAdmissions />} />
        <Route path="teachers" element={<ViewTeachers />} />
        <Route path="teacher-details" element={<ViewTeacherDetails />} />
      </Routes>
    </div>
  );
};

export default Admin;
