import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Blog.css';
import img1 from '../img/blog/blog-01.jpg';
import img2 from '../img/blog/blog-02.jpg';
import img3 from '../img/blog/blog-03.jpg';

const BlogArea = () => {
  return (
    <section className="blog-area section-bg-three section-notch pt-120 pb-90">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={9}>
          <h2 className="text-centerh2">Our Latest News</h2> {/* Added text-center */}
              <p className='pra'>
              Here is what you can expect from a house cleaning from a Handy professional. Download the
              app to share further cleaning details and instructions!
              </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={4} lg={4} md={6}>
            <div className="blog-item mb-30">
              <div className="blog-image">
                <a href="blog-details.html">
                  <img src={img1} alt="Why children need a Healthy Environment" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta ul_li">
                  <span>
                    <i className="far fa-user"></i>by <a href="#!">Wasim</a>
                  </span>
                  <span>
                    <i className="far fa-calendar-alt"></i>12th March 2021
                  </span>
                </div>
                <h4 className="blog-title">
                  <a href="blog-details.html">Why children need a Healthy Environment</a>
                </h4>
                <Button className="blog-btn" variant="outline-primary" href="blog-details.html">
                  Read More
                </Button>
              </div>
            </div>
          </Col>

          <Col xl={4} lg={4} md={6}>
            <div className="blog-item mb-30">
              <div className="blog-image">
                <a href="blog-details.html">
                  <img src={img2} alt="Planting Seeds in the Hearts of Preschoolers" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta ul_li">
                  <span>
                    <i className="far fa-user"></i>by <a href="#!">Wasim</a>
                  </span>
                  <span>
                    <i className="far fa-calendar-alt"></i>18th March 2021
                  </span>
                </div>
                <h4 className="blog-title">
                  <a href="blog-details.html">Planting Seeds in the Hearts of Preschoolers</a>
                </h4>
                <Button className="blog-btn" variant="outline-primary" href="blog-details.html">
                  Read More
                </Button>
              </div>
            </div>
          </Col>

          <Col xl={4} lg={4} md={6}>
            <div className="blog-item mb-30">
              <div className="blog-image">
                <a href="blog-details.html">
                  <img src={img3} alt="Full-day kindergarten in Alberta another" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta ul_li">
                  <span>
                    <i className="far fa-user"></i>by <a href="#!">Wasim</a>
                  </span>
                  <span>
                    <i className="far fa-calendar-alt"></i>16th March 2021
                  </span>
                </div>
                <h4 className="blog-title">
                  <a href="blog-details.html">Full-day kindergarten in Alberta another.</a>
                </h4>
                <Button className="blog-btn" variant="outline-primary" href="blog-details.html">
                  Read More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogArea;
