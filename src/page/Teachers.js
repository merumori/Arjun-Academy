import React from "react";
import "../css/Teachers.css"; // If you want custom styling
import img1 from '../img/teacher/img-01.jpg';
import img2 from '../img/teacher/img-02.jpg';
import img3 from '../img/teacher/img-03.jpg';
import img4 from '../img/teacher/img-04.jpg';
import img5 from '../img/teacher/img-05.jpg';
import img6 from '../img/teacher/img-06.jpg';
import img7 from '../img/teacher/img-07.jpg';
import img8 from '../img/teacher/img-08.jpg';


const Teachers = () => {
  return (
    <section className="team-area pt-110 pb-120 mt-5">
      <div className="container">
        <div className="row mt-none-30">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  <img src={member.image} alt={member.name} className="img-fluid" />
                </div>
                <div className="team-info">
                  <h3>
                    <a href={member.profileLink}>{member.name}</a>
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

// Array of team members data
const teamMembers = [
  {
    name: "Broklyn Doel",
    position: "Sains Teacher",
    image: img1,
    profileLink: "teacher-single.html",
  },
  {
    name: "Alex Jhonson",
    position: "Art Teacher",
    image: img2,
    profileLink: "teacher-single.html",
  },
  {
    name: "Janaton Doe",
    position: "English Teacher",
    image: img3,
    profileLink: "teacher-single.html",
  },
  {
    name: "Robot Jhonson",
    position: "Math Teacher",
    image: img4,
    profileLink: "teacher-single.html",
  },
  {
    name: "Helam Lie",
    position: "Sains Teacher",
    image: img5,
    profileLink: "teacher-single.html",
  },
  {
    name: "Alex Lia",
    position: "Art Teacher",
    image: img6,
    profileLink: "teacher-single.html",
  },
  {
    name: "Jonson Rabe",
    position: "English Teacher",
    image:img7,
    profileLink: "teacher-single.html",
  },
  {
    name: "Robin Doe",
    position: "Math Teacher",
    image: img8,
    profileLink: "teacher-single.html",
  },
];

export default Teachers;
