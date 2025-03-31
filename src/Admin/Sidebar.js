import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: "🏠", route: "/admin" },
    { title: "Admission Data", icon: "📋", route: "/admin/admission-data" },
    { title: "Teachers", icon: "👨‍🏫", route: "/admin/teachers" },
    { title: "Class", icon: "👩‍🎓", route: "/admin/viewClasses" },
    { title: "Blog", icon: "📝", route: "/admin/blog" },
  ];

  return (
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

      {/* Internal CSS */}
      <style>{`
        .sidebar {
          width: 240px;
          background-color: #222;
          color: white;
          height: 100vh;
          padding: 20px;
          overflow-y: auto;
          transition: width 0.3s ease;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 1000;
        }

        .sidebar-item {
          padding: 12px;
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
          font-size: 24px;
        }

        .sidebar-text {
          font-size: 18px;
          font-weight: 500;
        }

        /* Responsive Sidebar */
        @media (max-width: 768px) {
          .sidebar {
            width: 80px;
          }

          .sidebar-text {
            display: none;
          }

          .sidebar-item {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
