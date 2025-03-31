import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons
import '../css/contact.css'; // Assuming you will create a CSS file for styling

const ContactSection = () => {
  return (
    <section className="contact-area pt-120">
      <div className="container">
        <div className="row mt-40 justify-content-center">
          {/* Address Section */}
          <div className="col-lg-4 col-md-6">
            <div className="contact__info--item text-center mt-30">
              <div className="icon animate-icon">
                <FaMapMarkerAlt size={48} color="#00394F" /> {/* Map Marker Icon */}
              </div>
              <h3 className="title">Address</h3>
              <p className="sub-title">
                Brooklyn, 24th floor, 123rd street, New York City
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="col-lg-4 col-md-6">
            <div className="contact__info--item text-center mt-30">
              <div className="icon animate-icon">
                <FaPhoneAlt size={48} color="#00394F" /> {/* Phone Icon */}
              </div>
              <h3 className="title">Phone Number</h3>
              <p className="sub-title">
                <a href="tel:+012-345-6789">+012-345-6789</a>
              </p>
              <p className="sub-title">
                <a href="tel:+012-345-6789">+012-345-6789</a>
              </p>
            </div>
          </div>

          {/* Email Section */}
          <div className="col-lg-4 col-md-6">
            <div className="contact__info--item text-center mt-30">
              <div className="icon animate-icon">
                <FaEnvelope size={48} color="#00394F" /> {/* Envelope Icon */}
              </div>
              <h3 className="title">Email</h3>
              <p className="sub-title">
                <a href="mailto:hello@company.com">hello@company.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row mt-40">
        <div className="col-12">
          <div className="contact-from-inner">
            <form className="contact-from" action="#!">
              <div className="row">
                <div className="col-md-6">
                  <div className="input-field">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Type your name*"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-field">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Type your email*"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-field">
                    <input
                      type="number"
                      name="number"
                      id="number"
                      placeholder="Type your number*"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-field">
                    <input
                      type="text"
                      name="website"
                      id="website"
                      placeholder="Type your Website"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-field">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Type your message*"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="contact-btn text-center">
                    <button className="thm-btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
