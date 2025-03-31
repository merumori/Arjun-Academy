import React, { useState, useEffect, useMemo } from 'react';
import '../css/counter.css'; // Link to the CSS file
import icon1 from '../img/icon/c-icon1.png';
import icon2 from '../img/icon/c-icon2.png';
import icon3 from '../img/icon/c-icon3.png';
import icon4 from '../img/icon/c-icon4.png';

const CounterArea = () => {
  const counters = useMemo(
    () => [
      { icon: icon1, count: 2500, label: 'Students Enrolled' },
      { icon: icon2, count: 912, label: 'Best Awards Won' },
      { icon: icon3, count: 370, label: 'Classes Completed' },
      { icon: icon4, count: 648, label: 'Our Total Courses' },
    ],
    [] // Empty dependency array ensures this is only created once
  );

  const [currentCounts, setCurrentCounts] = useState(counters.map(() => 0));
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const duration = 10000; // Animation duration in milliseconds
    const steps = 100; // Number of updates during animation
    const interval = duration / steps;

    const increments = counters.map((counter) => counter.count / steps);
    let currentStep = 0;

    const updateCounts = () => {
      if (!isPaused) {
        currentStep += 1;
        setCurrentCounts((prevCounts) =>
          prevCounts.map((count, index) =>
            currentStep < steps
              ? count + increments[index]
              : counters[index].count
          )
        );
        if (currentStep >= steps) {
          clearInterval(intervalId);
        }
      }
    };

    const intervalId = setInterval(updateCounts, interval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [counters, isPaused]);

  return (
    <section
      className="counter-area section-bg-two section-notch pt-130 pb-100"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on hover leave
    >
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6" key={index}>
              <div className="single-counter text-center pb-30">
                <img src={counter.icon} alt={counter.label} className="img-fluid" />
                <h3>
                  <span className="odometer">
                    {Math.floor(currentCounts[index])}
                  </span>
                  <span className="plus">+</span>
                </h3>
                <p>{counter.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterArea;
