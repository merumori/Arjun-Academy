import React from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaPinterestP, FaLinkedinIn,FaPhoneAlt, FaEnvelope, FaMapMarkerAlt  } from "react-icons/fa";
import "../css/Footer.css";
import bg from '../img/bg/footer-bg.jpg';
import img1 from '../img/blog/footer-post/footer-post01.jpg';
import img2 from '../img/blog/footer-post/footer-post02.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-area" style={{ backgroundImage: `url(${bg})` }}>
        <div className="footer-top py-5">
          <div className="container">
            <div className="row text-white">
            <ContactInfo icon={<FaPhoneAlt />} title="Give us a Call" content="+962-478-123-4567" />
              <ContactInfo icon={<FaEnvelope />} title="Send us a Message" content="kinterschoo07@gmail.com" />
              <ContactInfo icon={<FaMapMarkerAlt />} title="Visit our Location" content="07 Suitland Street 120 USA" />
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-5 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <AboutSection />
              </div>
              <div className="col-md-4">
                <RecentPosts />
              </div>
              <div className="col-md-4">
                <NewsletterSubscription />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center">
                <p>
                  &copy; 2022 Arjun. Designed by{" "}
                  <a href="https://balajitechbiz.com/" target="_blank" rel="noopener noreferrer">
                  Balaji Techbiz
                  </a>
                </p>
              </div>
              <div className="col-md-6">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactInfo = ({ icon, title, content }) => (
  <div className="col-md-4">
    <div className="d-flex align-items-center mb-4">
      <div className="icon me-3 icon-white">
        {icon}
      </div>
      <div>
        <h5 className="mb-1">{title}</h5>
        <span>{content}</span>
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div>
    <h3>About Arjun Academy</h3>
    <p style={{color:"white"}}>
      Monotne deplos copertve chanva andng crorate Qhanin Unique Qnderwhe Premum Convere With Uheng Mutmed Nquel
      Undehee Mandnge theme Qhann Unqu Qndewhe Premum Converenc With Aheing Mutmeda Nquel Undehele.
    </p>
    <div>
      <h4>Follow us:</h4>
      <SocialLinks />
    </div>
  </div>
);

const RecentPosts = () => (
  <div>
    <h3>Recent Blog Posts</h3>
    <div>
      <PostItem
        image={img1}
        date="24th March 2021"
        title="Why children need a Healthy Environment"
        link="blog-details.html"
      />
      <PostItem
        image={img2}
        date="24th March 2022"
        title="Planting Seeds in the Hearts of Preschoolers"
        link="blog-details.html"
      />
    </div>
  </div>
);

const PostItem = ({ image, date, title, link }) => (
  <div className="d-flex mb-3">
    <a href={link}>
      <img src={image} alt={title} className="me-3" style={{ width: "60px", height: "60px", objectFit: "cover" }} />
    </a>
    <div>
      <span className="d-block">{date}</span>
      <a href={link} className="text-white">
        {title}
      </a>
    </div>
  </div>
);

const NewsletterSubscription = () => (
  <div>
    <h3>Newsletter Subscription</h3>
    <p style={{color:"white"}}>Enter your email and get the latest updates and offers.</p>
    <form>
      <div className="input-group">
        <input type="email" className="form-control" placeholder="Enter your email" required />
        <button className="btn btn-primary" type="submit">
          Subscribe Now!
        </button>
      </div>
    </form>
  </div>
);

const SocialLinks = () => (
    <ul className="list-unstyled d-flex justify-content-center" style={{marginTop:"10px"}}>
      <li className="ms-3">
        <a href="#!" className="icon-white" style={{ backgroundColor: '#3b5998', padding: '10px', borderRadius: '50%' }}>
          <FaFacebookF style={{ color: 'white' }} />
        </a>
      </li>
      <li className="ms-3">
        <a href="#!" className="icon-white" style={{ backgroundColor: '#db4437', padding: '10px', borderRadius: '50%' }}>
          <FaGooglePlusG style={{ color: 'white' }} />
        </a>
      </li>
      <li className="ms-3">
        <a href="#!" className="icon-white" style={{ backgroundColor: '#1da1f2', padding: '10px', borderRadius: '50%' }}>
          <FaTwitter style={{ color: 'white' }} />
        </a>
      </li>
      <li className="ms-3">
        <a href="#!" className="icon-white" style={{ backgroundColor: '#e60023', padding: '10px', borderRadius: '50%' }}>
          <FaPinterestP style={{ color: 'white' }} />
        </a>
      </li>
      <li className="ms-3">
        <a href="#!" className="icon-white" style={{ backgroundColor: '#0077b5', padding: '10px', borderRadius: '50%' }}>
          <FaLinkedinIn style={{ color: 'white' }} />
        </a>
      </li>
    </ul>
  );
  

export default Footer;
