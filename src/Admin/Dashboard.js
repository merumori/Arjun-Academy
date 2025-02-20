import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.background = "linear-gradient(to right, #1bcf5c, #3e9cf7)";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  const handleCardClick = (route) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(route);
    }, 2000);
  };

  const cards = [
    { title: "Admission Data", icon: "📋", route: "/admin/admission-data" },
    { title: "Teacher", icon: "👨‍🏫", route: "/admin/teachers" },
    { title: "Teacher Details", icon: "📘", route: "/admin/teacher-details" },
    { title: "Student", icon: "👩‍🎓", route: "/admin/student" },
    { title: "Blog", icon: "📝", route: "/admin/blog" },
  ];

  return (
    <div className="dashboard-container">
      <h3 className="admin-title ">ARJUN ACADEMY ADMIN PANEL</h3>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card-custom" onClick={() => handleCardClick(card.route)}>
            <div className="card-body">
              <h1 className="card-icon">{card.icon}</h1>
              <h5 className="card-title">{card.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="loading-overlay">
          <img src="https://cdnl.iconscout.com/lottie/premium/thumb/boy-going-to-school-5105486-4278146.gif" alt="Loading" className="loading-gif" />
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
