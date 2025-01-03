import React from 'react';
import '../css/popularclass.css';
import class1 from '../img/class/class-1.jpg';
import class2 from '../img/class/class-2.jpg';
import class3 from '../img/class/class-3.jpg';

const PopularClasses = () => {
  return (
    <div className="container py-5">
        <h2 className="text-center">Our Popular Classes</h2> {/* Added text-center */}
              <p>
                Here is what you can expect from a house cleaning from a Handy
                professional. Download the app to share further cleaning details
                and instructions!
              </p>

      <div className="row justify-content-center">
        {[
          {
            image: class1,
            title: 'Imagination Classes',
            time: '08:00 am - 10:00 am',
            description:
              'Drastically innovate, fully arched applications, awesome theme education.',
            classSize: '30 - 40',
            yearsOld: '06 - 09',
            fee: '$320.00',
          },
          {
            image: class2,
            title: 'Talented Explorers',
            time: '08:00 am - 10:00 am',
            description:
              'Drastically innovate, fully arched applications, awesome theme education.',
            classSize: '30 - 40',
            yearsOld: '06 - 09',
            fee: '$320.00',
          },
          {
            image: class3,
            title: 'Super Color Kid',
            time: '08:00 am - 10:00 am',
            description:
              'Drastically innovate, fully arched applications, awesome theme education.',
            classSize: '30 - 40',
            yearsOld: '06 - 09',
            fee: '$320.00',
          },
        ].map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 mb-4" key={index}>
            <div className="class-item shadow-sm rounded">
              <div className="class-img">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded-top"
                />
              </div>
              <div className="class-content p-3">
                <h4 className="title">
                  <a href="class-single.html" className="text-dark">
                    {item.title}
                  </a>
                </h4>
                <p className="text-muted">Class Time: {item.time}</p>
                <p>{item.description}</p>
              </div>
              <ul className="schedule list-unstyled p-3">
                <li>
                  <span>Class Size</span>
                  <span className="class-size float-right">
                    {item.classSize}
                  </span>
                </li>
                <li>
                  <span>Years Old</span>
                  <span className="class-size float-right">{item.yearsOld}</span>
                </li>
                <li>
                  <span>Tuition Fee</span>
                  <span className="class-size float-right">{item.fee}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <div className="view-class mt-4">
            <a className="btn  btn-lg" href="classes.html">
              See More Classes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
