import React from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  // { title: "Dashboard", icon: "🏠", route: "/admin/dashboard" },
  { title: "Admission Data", icon: "📊", route: "/admin/dashboard/admission-data" },
  { title: "Teachers", icon: "👩‍🏫", route: "/admin/dashboard/teachers" },
  { title: "Classes", icon: "📚", route: "/admin/dashboard/viewClasses" },
  { title: "Events", icon: "📅", route: "/admin/dashboard/Viewevent" },
  { title: "Videos", icon: "🎥", route: "/admin/dashboard/VideoPost" },
  { title: "Settings", icon: "⚙️", route: "/admin/dashboard/settings" }, // Added Settings item
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-content">
      <h2>Welcome to Admin Dashboard</h2>
      <div className="stats-container">
        {menuItems.map((item, index) => (
          <div
            className="stat-card"
            key={index}
            onClick={() => navigate(item.route)}
          >
            <div className="stat-icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <style>{`
        .dashboard-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-content h2 {
          margin-bottom: 30px;
          font-size: 28px;
          color: #2c3e50;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        .stat-card {
          background: white;
          padding: 30px 20px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-8px);
          background-color: #1bcf5c;
          color: #000;
        }

        .stat-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .stat-card h3 {
          font-size: 18px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .stat-card {
            padding: 20px 15px;
          }

          .stat-icon {
            font-size: 30px;
          }

          .stat-card h3 {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
