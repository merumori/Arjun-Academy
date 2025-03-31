import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Classes.css';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('https://arjun-academy-ijou.onrender.com/api/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="classes-area">
      <div className="container">
        <div className="row">
          {classes.map((classItem) => (
            <div key={classItem._id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="class-item">
                <div className="class-img">
                  <img src={`http://localhost:5000${classItem.image}`} alt={classItem.title} />
                </div>
                <div className="class-content">
                  <h4 className="title">
                    <a href={classItem.link}>{classItem.title}</a>
                  </h4>
                  <p>Class Time: {classItem.time}</p>
                  <p 
                    className="description"
                    onMouseEnter={() => toggleExpand(classItem._id)}
                    onMouseLeave={() => toggleExpand(classItem._id)}
                  >
                    {expanded[classItem._id] ? classItem.description : `${classItem.description.slice(0, 80)}...`}
                  </p>
                </div>
                <ul className="schedule">
                  <li>
                    <span>Class Size:</span>
                    <span className="class-size">{classItem.class_size}</span>
                  </li>
                  <li>
                    <span>Age Range:</span>
                    <span className="class-size class-size-2">{classItem.age_range}</span>
                  </li>
                  <li>
                    <span>Tuition Fee:</span>
                    <span className="class-size">₹{classItem.tuition_fee}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
