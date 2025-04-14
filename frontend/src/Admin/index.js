import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminNavbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import ViewAdmissions from "./ViewAdmissions";
import ViewTeachers from "./ViewTeachers";
import InsertClass from "./InsertClass";
import Classes from "./viewclass";
import ViewEvents from "./ViewEvents";
import VideoManager from "./VideoManager";
import AdminDashboard from "./AdminDashboard";
import Settings from "./Settings";

const Admin = () => {
  return (
    <div className="admin-wrapper">
      <AdminNavbar />
      <div className="admin-content">
        <Sidebar />
        <div className="admin-main">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route index element={<Dashboard />} />
            <Route path="admission-data" element={<ViewAdmissions />} />
            <Route path="teachers" element={<ViewTeachers />} />
            <Route path="viewClasses" element={<Classes />} />
            <Route path="InsertClass" element={<InsertClass />} />
            <Route path="Viewevent" element={<ViewEvents />} />
            <Route path="VideoPost" element={<VideoManager />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>

      <style>{`
        .admin-wrapper {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        .admin-content {
          display: flex;
          flex: 1;
        }

        .admin-main {
          flex: 1;
          padding: 20px;
          margin-left: 240px;
          overflow-y: auto;
          transition: margin-left 0.3s ease;
        }

        @media (max-width: 768px) {
          .admin-main {
            margin-left: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default Admin;
