import React from "react";
import "./fotter.css"
import Link from "next/link";


const Contact = () => {
  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Get In Touch</h4>
          <h2 className="st-section-heading-subtitle">Get In Touch</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      {/* <!-- Contact Container --> */}

      <div className="footerImage">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-24">
            <div id="st-alert"></div>
            <form
              action="#"
              method="POST"
              className="st-contact-form"
              id="contact-form"
            >
              <div className="st-form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  required
                />
              </div>
              <div className="st-form-field">
                <textarea
                  cols="30"
                  rows="10"
                  id="msg"
                  name="msg"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                className="st-btn st-style1 st-color1"
                type="submit"
                id="submit"
                name="submit"
              >
                Send message
              </button>
            </form>
          </div>
          {/* <div className="st-height-b0 st-height-lg-b30"></div> */}

          <div className="col-lg-6 my-16">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">Contact Info</h3>
            <div className="st-contact-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <i className="bi bi-envelope-fill"></i>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <a href="#">devis@example.com</a>
                  <a href="#">info@support.com</a>
                </div>
              </div>
              <div className="st-single-contact-info">
                <i className="bi bi-telephone-inbound-fill"></i>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>+1 876-369-9009</span>
                  <span>+1 213-519-1786</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <i className="bi bi-geo-alt-fill"></i>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>
                    2661 High Meadow Lane Bear Creek, <br />
                    Olancha, KY 93544
                  </span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-link">
                  <a href="#" className="st-social-btn active">
                    <span className="st-social-icon">
                      <i className="bi bi-facebook"></i>
                    </span>
                    <span className="st-icon-name">Facebook</span>
                  </a>
                  <a href="#" className="st-social-btn">
                    <span className="st-social-icon">
                      <i className="bi bi-youtube"></i>
                    </span>
                    <span className="st-icon-name">Youtube</span>
                  </a>
                  <a href="#" className="st-social-btn">
                    <span className="st-social-icon">
                      <i className="bi bi-twitter"></i>
                    </span>
                    <span className="st-icon-name">Twitter</span>
                  </a>
                  <a href="#" className="st-social-btn">
                    <span className="st-social-icon">
                      <i className="bi bi-instagram"></i>
                    </span>
                    <span className="st-icon-name">Instagram</span>
                  </a>
                  <a href="#" className="st-social-btn">
                    <span className="st-social-icon">
                      <i className="bi bi-linkedin"></i>
                    </span>
                    <span className="st-icon-name">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        {/* footer text -------------------------------  */}
          
        {/* <hr className="border-2	border-slate-200	my-5 "/>

          <div>
            <h1>Professor Mokhter Ahmad</h1>
          </div> */}

        </div>
  
      </div>
      </div>
      {/* <div className="st-height-b100 st-height-lg-b80"></div> */}
    </section>
  );
};

export default Contact;
