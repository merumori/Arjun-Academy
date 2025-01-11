import React from "react";
import Navbar from "./Navbar";
import ViewAdmissions from "./ViewAdmissions";

import ViewTeachers from "./Viewtechar";
import EditTeacherModal from "./EditTeacherModal";
import TeacherDetails from "./AddTeacherDetails";
import ViewTeacherDetails from './ViewTeacherDetails'


const Admin = () => {
  return (
    <div className="App">
        <Navbar/>
        <ViewAdmissions/>
        {/* <AddTeachers /> */}
        <ViewTeachers/>
        <EditTeacherModal/>
        <TeacherDetails/>
        <ViewTeacherDetails/>
     
     <h2>hello</h2>
    </div>
  );
};

export default Admin;
