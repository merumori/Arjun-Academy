import React, { useState, useEffect } from 'react';
import '../css/Classes.css'; // Add your custom styling here
import img1 from '../img/class/class-1.jpg';
import img2 from '../img/class/class-2.jpg';
import img3 from '../img/class/class-3.jpg';
import img4 from '../img/class/class-4.jpg';
import img5 from '../img/class/class-5.jpg';
import img6 from '../img/class/class-6.jpg';

// Sample JSON data (this can be replaced with an actual API or external JSON file)
const classesData = {
  "classes": [
    {
      "id": 1,
      "title": "Imagination Classes",
      "image": img1,
      "time": "08:00 am - 10:00 am",
      "description": "Drastically innovate fully researched applications for awesome themed education.",
      "class_size": "30 - 40",
      "age_range": "06 - 09",
      "tuition_fee": "$320.00",
      "link": "class-single.html"
    },
    {
      "id": 2,
      "title": "Learning Disciplines",
      "image": img2,
      "time": "08:00 am - 10:00 am",
      "description": "Drastically innovate fully researched applications for awesome themed education.",
      "class_size": "30 - 40",
      "age_range": "06 - 09",
      "tuition_fee": "$320.00",
      "link": "class-single.html"
    },
    {
      "id": 3,
      "title": "Kid And Future",
      "image": img3,
      "time": "08:00 am - 10:00 am",
      "description": "Drastically innovate fully researched applications for awesome themed education.",
      "class_size": "30 - 40",
      "age_range": "06 - 09",
      "tuition_fee": "$320.00",
      "link": "class-single.html"
    },
    {
      "id": 4,
      "title": "Talented Explorers",
      "image": img4,
      "time": "08:00 am - 10:00 am",
      "description": "Drastically innovate fully researched applications for awesome themed education.",
      "class_size": "30 - 40",
      "age_range": "06 - 09",
      "tuition_fee": "$320.00",
      "link": "class-single.html"
    },
    {
      "id": 5,
      "title": "Magic Number",
      "image": img5,
      "time": "08:00 am - 10:00 am",
      "description": "Drastically innovate fully researched applications for awesome themed education.",
      "class_size": "30 - 40",
      "age_range": "06 - 09",
      "tuition_fee": "$320.00",
      "link": "class-single.html"
    },
    {
      "id": 6,
      "title": "Super Color Kid",
      "image": img6,
      "time": "08:00 am - 10:00 am",
      "description": "Drastically innovate fully researched applications for awesome themed education.",
      "class_size": "30 - 40",
      "age_range": "06 - 09",
      "tuition_fee": "$320.00",
      "link": "class-single.html"
    }
    
  ]
};

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Initialize data
    setClasses(classesData.classes);
  }, []);

  return (
    <section className="classes-area pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center mt-none-30">
          {/* Render all the class items dynamically */}
          {classes.map((classItem) => (
            <div key={classItem.id} className="col-xl-4 col-lg-4 col-md-6">
              <div className="class-item mt-30">
                <div className="class-img">
                  <img src={classItem.image} alt={classItem.title} />
                </div>
                <div className="class-content">
                  <h4 className="title">
                    <a href={classItem.link}>{classItem.title}</a>
                  </h4>
                  <p>Class Time: {classItem.time}</p>
                  <p>{classItem.description}</p>
                </div>
                <ul className="schedule">
                  <li>
                    <span>Class Size</span>
                    <span className="class-size">{classItem.class_size}</span>
                  </li>
                  <li>
                    <span>Years Old</span>
                    <span className="class-size class-size-2">{classItem.age_range}</span>
                  </li>
                  <li>
                    <span>Tuition Fee</span>
                    <span className="class-size">{classItem.tuition_fee}</span>
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
