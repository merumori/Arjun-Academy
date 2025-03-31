import React, { useState } from "react";
import '../css/studentblog.css';
import img1 from '../img/blog/blog-01.jpg';
import img2 from '../img/blog/blog-02.jpg';
import img3 from '../img/blog/blog-03.jpg';

const BlogContentArea = () => {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleReadMore = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <section className="blog-content-area pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-wrapper mb-4">
              {/* Blog Post */}
              <article className="post-item mb-4">
                <div className="post-thumb mb-3">
                  <img src={img1} alt="blog" className="img-fluid rounded" />
                </div>
                <div className="post-content">
                  <div className="post-meta mb-3 text-muted">
                    <span className="me-3">
                      <i className="far fa-calendar-alt"></i> 27 December 2020
                    </span>
                    <span className="me-3">
                      <i className="far fa-user"></i> Arjun
                    </span>
                    <span>
                      <i className="far fa-comments"></i> 24 Comments
                    </span>
                  </div>
                  <h4 className="post-title">
                    Planting Seeds in the Hearts of Preschoolers
                  </h4>
                  <div className="post-text">
                    <p className="text-muted">
                      Completely deploy focused supply chains rather than
                      viraling an e-services productivate pandemic experiences
                      via interoperable niche markets.
                    </p>
                    {expandedPosts[1] && (
                      <p className="text-muted">
                        Additional content about planting seeds in the hearts
                        of preschoolers. This section provides more detailed
                        information and insights.
                      </p>
                    )}
                  </div>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => toggleReadMore(1)}
                  >
                    {expandedPosts[1] ? "Show Less" : "Read More"}
                  </button>
                </div>
              </article>

              {/* Gallery Post */}
              <article className="post-item mb-4">
                <div className="gallery-post mb-3">
                  <img src={img2} className="img-fluid rounded" alt="blog" />
                </div>
                <div className="post-content">
                  <div className="post-meta mb-3 text-muted">
                    <span className="me-3">
                      <i className="far fa-calendar-alt"></i> 27 December 2020
                    </span>
                    <span className="me-3">
                      <i className="far fa-user"></i> Arjun
                    </span>
                    <span>
                      <i className="far fa-comments"></i> 24 Comments
                    </span>
                  </div>
                  <h4 className="post-title">
                    Why children need a Healthy Environment
                  </h4>
                  <div className="post-text">
                    <p className="text-muted">
                      Completely deploy focused supply chains rather than
                      viraling an e-services productivate pandemic experiences
                      via interoperable niche markets.
                    </p>
                    {expandedPosts[2] && (
                      <p className="text-muted">
                        Additional content about the importance of healthy
                        environments for children. This section provides more
                        detailed information and insights.
                      </p>
                    )}
                  </div>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => toggleReadMore(2)}
                  >
                    {expandedPosts[2] ? "Show Less" : "Read More"}
                  </button>
                </div>
              </article>

              {/* Video Post */}
              <article className="post-item mb-4">
                <div className="post-thumb mb-3 position-relative">
                  <img src={img3} alt="blog" className="img-fluid rounded" />
                </div>
                <div className="post-content">
                  <div className="post-meta mb-3 text-muted">

                    <span className="me-3">
                      <i className="far fa-calendar-alt"></i> 27 December 2020
                    </span>
                    <span className="me-3">
                      <i className="far fa-user"></i> Arjun
                    </span>
                    <span>
                      <i className="far fa-comments"></i> 24 Comments
                    </span>
                  </div>
                  <h4 className="post-title">
                    Full-day kindergarten in Alberta another.
                  </h4>
                  <div className="post-text">
                    <p className="text-muted">
                      Completely deploy focused supply chains rather than
                      viraling an e-services productivate pandemic experiences
                      via interoperable niche markets.
                    </p>
                    {expandedPosts[3] && (
                      <p className="text-muted">
                        Additional content about full-day kindergarten in
                        Alberta. This section provides more detailed
                        information and insights.
                      </p>
                    )}
                  </div>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => toggleReadMore(3)}
                  >
                    {expandedPosts[3] ? "Show Less" : "Read More"}
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContentArea;
