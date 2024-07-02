import React from 'react'
import logo from "../../assets/img/logo.png";


function Footer() {
  return (
    <>
     <div className="footer-area" data-aos="fade-up">
          <div className="container">
            <div className="footer-info-area">
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-footer-info ms-0">
                    <a className="text-decoration-none logo" href="index.php">
                      <img src={logo} alt="logo" />
                    </a>
                    <p>
                      Cybersecurity is crucial in today's digital age, where
                      many individuals and organizations store a significant
                      amount of sensitive data on computers...
                    </p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-4">
                      <div className="single-footer-info">
                        <h3>Contact Us</h3>
                        <ul className="list-unstyled ps-0 mb-0">
                          <li>
                            <strong>Address : </strong>320 Tower C, Noida One,
                            Sector 62 Noida, Uttar Pradesh, India
                          </li>
                          <li>
                            <strong>Email:</strong>
                            <a
                              className="text-decoration-none"
                              href="mailto:sales@cybersigmacs.com"
                            >
                              <span className="__cf_email__">
                                sales@cybersigmacs.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <strong>Phone:</strong>
                            <a
                              className="text-decoration-none"
                              href="tel:+91 8882414832"
                            >
                              +91 8882414832
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4">
                      <div className="single-footer-info">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled ps-0 mb-0">
                          <li>
                            <a className="text-decoration-none" href="#">
                              About Us
                            </a>
                          </li>
                          <li>
                            <a className="text-decoration-none" href="#">
                              Services
                            </a>
                          </li>
                          <li>
                            <a className="text-decoration-none" href="#">
                              Testimonial
                            </a>
                          </li>
                          <li>
                            <a className="text-decoration-none" href="#">
                              Our Blog
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4">
                      <div className="single-footer-info">
                        <h3>Resourses</h3>
                        <ul className="list-unstyled ps-0 mb-0">
                          <li>
                            <a className="text-decoration-none" href="#">
                              FAQs
                            </a>
                          </li>
                          <li>
                            <a className="text-decoration-none" href="#">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a className="text-decoration-none" href="#">
                              Terms &amp; Conditions
                            </a>
                          </li>
                          <li>
                            <a className="text-decoration-none" href="#">
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    </>
  )
}

export default Footer