import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", icon: "🏠", route: "/admin/dashboard" },
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
          background: linear-gradient(135deg, rgb(35, 204, 136), rgb(142, 207, 53));
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
          background-color:rgb(226, 226, 226);
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
