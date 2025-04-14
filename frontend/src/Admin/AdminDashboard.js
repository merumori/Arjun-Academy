import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { title: "Dashboard", icon: "🏠", route: "/admin/dashboard" },
    { title: "Admission Data", icon: "📊", route: "/admin/dashboard/admission-data" },
    { title: "Teachers", icon: "👩‍🏫", route: "/admin/dashboard/teachers" },
    { title: "Classes", icon: "📚", route: "/admin/dashboard/viewClasses" },
    { title: "Events", icon: "📅", route: "/admin/dashboard/Viewevent" },
    { title: "Videos", icon: "🎥", route: "/admin/dashboard/VideoPost" },
    { title: "Settings", icon: "⚙️", route: "/admin/dashboard/settings" }, // Added Settings item
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`sidebar-item ${
              location.pathname === item.route ? "active" : ""
            }`}
            onClick={() => navigate(item.route)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <>
      <AdminLayout />
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .admin-container {
          display: flex;
          min-height: 100vh;
        }

        .sidebar {
          width: 240px;
          background-color: #2c3e50;
          color: white;
          transition: all 0.3s ease;
        }

        .sidebar-header {
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-header h3 {
          font-size: 18px;
          font-weight: 600;
        }

        .sidebar-menu {
          padding: 10px;
        }

        .sidebar-item {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 6px;
          margin-bottom: 5px;
        }

        .sidebar-item:hover {
          background-color: #34495e;
        }

        .sidebar-item.active {
          background-color: #1bcf5c;
          color: #000;
          font-weight: 500;
        }

        .sidebar-icon {
          font-size: 20px;
        }

        .sidebar-text {
          font-size: 15px;
        }

        .main-content {
          flex: 1;
          padding: 20px;
          background-color: #f5f7fa;
        }

        .dashboard-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-content h2 {
          margin-bottom: 30px;
          color: #2c3e50;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-card h3 {
          color: #7f8c8d;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .stat-card p {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 70px;
          }

          .sidebar-header h3 {
            display: none;
          }

          .sidebar-text {
            display: none;
          }

          .sidebar-item {
            justify-content: center;
            padding: 15px 0;
          }
        }

        @media (max-width: 480px) {
          .stats-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default AdminDashboard;