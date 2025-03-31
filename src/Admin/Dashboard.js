import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: "🏠", route: "/admin" },
    { title: "Admission Data", icon: "📋", route: "/admin/admission-data" },
    { title: "Teachers", icon: "👨‍🏫", route: "/admin/teachers" },
  ];

  return (
    <>
      <div className="sidebar">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="sidebar-item"
            onClick={() => navigate(item.route)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.title}</span>
          </div>
        ))}
      </div>

      <style>{`
        .sidebar {
          width: 240px;
          background-color: #222;
          color: white;
          height: 100vh;
          padding: 20px;
          overflow-y: auto;
          transition: transform 0.3s ease;
        }

        .sidebar-item {
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          border-radius: 8px;
        }

        .sidebar-item:hover {
          background-color: #1bcf5c;
          color: #000;
        }

        .sidebar-icon {
          font-size: 22px;
        }

        .sidebar-text {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100px;
          }

          .sidebar-text {
            display: none;
          }

          .sidebar-item {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
