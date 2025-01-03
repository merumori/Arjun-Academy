import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/portfolio.css"; // Include the CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

import img1 from "../img/portfolio/port01.jpg";
import img2 from "../img/portfolio/port02.jpg";
import img3 from "../img/portfolio/port03.jpg";
import img4 from "../img/portfolio/port04.jpg";
import img5 from "../img/portfolio/port05.jpg";
import img6 from "../img/portfolio/port06.jpg";

const PortfolioArea = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const portfolioItems = [
    {
      imgSrc: img1,
      title: "Product Name Here",
      category: ["cat3", "cat4", "cat2"],
      author: "Kinter Theme",
    },
    {
      imgSrc: img2,
      title: "Product Name Here",
      category: ["cat1", "cat2", "cat4"],
      author: "Kinter Theme",
    },
    {
      imgSrc: img3,
      title: "Product Name Here",
      category: ["cat2", "cat3", "cat1"],
      author: "Kinter Theme",
    },
    {
      imgSrc: img4,
      title: "Product Name Here",
      category: ["cat1", "cat2", "cat4"],
      author: "Kinter Theme",
    },
    {
      imgSrc: img5,
      title: "Product Name Here",
      category: ["cat3", "cat1", "cat4"],
      author: "Kinter Theme",
    },
    {
      imgSrc: img6,
      title: "Product Name Here",
      category: ["cat3", "cat4", "cat2"],
      author: "Kinter Theme",
    },
  ];

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeFilter));

  return (
    <div className="portfolio-area pt-110 pb-80">
      <div className="container">
      <h2 className="text-center">Our School Gallery</h2> {/* Added text-center */}
              <p>
              Explore our school gallery showcasing various creative works and
              moments.
              </p>

        <div className="row text-center">
          <div className="col-12">
            <ul className="portfolio-menu">
              {[{ label: "See All", filter: "*" }, 
                { label: "Branding", filter: "cat1" },
                { label: "Creative", filter: "cat2" },
                { label: "Illustration", filter: "cat3" },
                { label: "Photoshop", filter: "cat4" }
              ].map((menu, index) => (
                <li
                  key={index}
                  className={activeFilter === menu.filter ? "active" : ""}
                  onClick={() => setActiveFilter(menu.filter)}
                >
                  {menu.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row grid text-center">
          {filteredItems.map((item, index) => (
            <div
              className={`col-xl-4 col-lg-4 col-md-6 grid-item mb-30 ${item.category.join(
                " "
              )}`}
              key={index}
            >
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="img-fluid"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a
                      className="popup-image"
                      href={item.imgSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-plus icon"></i>
                    </a>
                  </div>
                  <a href="#!">
                    <h3>{item.title}</h3>
                  </a>
                  <span>By: {item.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioArea;
