import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Teachers.css"; // Optional: Custom styling

const Teachers = () => {
  const [teachers, setTeachers] = useState([]); // State to hold the fetched teachers data

  useEffect(() => {
    // Fetch teachers data from the backend when the component mounts
    axios
      .get("https://arjun-academy-ijou.onrender.com/teachers") // Your backend URL
      .then((response) => {
        setTeachers(response.data); // Set the fetched data into state
      })
      .catch((error) => {
        console.error("There was an error fetching the teacher data:", error);
      });
  }, []);

  return (
    <section className="team-area pt-110 pb-120 mt-5">
      <div className="container">
        <div className="row mt-none-30">
          {teachers.map((member, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  {/* Dynamically render image with the correct URL */}
                  <img
                    src={`https://arjun-academy-ijou.onrender.com/${member.image}`} // Reference the correct backend URL
                    alt={member.name}
                    className="img-fluid"
                  />
                </div>
                <div className="team-info">
                  <h3>
                    <a href={member.profileLink} target="_blank" rel="noopener noreferrer">
                      {member.name}
                    </a>
                  </h3>
                  <span>{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
