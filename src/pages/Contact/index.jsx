import React from 'react'
import visit from "../../assets/img/icon/icon-46.png";
import call from "../../assets/img/icon/icon-47.png";
import mail from "../../assets/img/icon/icon-48.png";

function Contact() {
  return (
    <>
      <section className="contact-details-section" id="contact_us">
          <div className="container">
            <div className="section-title text-center">
              <h2>We’d love to help you</h2>
              <div className="text">
                Please feel free to get in touch using the form below. We'd love
                to hear your <br /> thoughts &amp; answer any questions you may
                have!
              </div>
              <div className="text-decoration">
                <span className="left" />
                <span className="right" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 contact-info-block">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img src={visit} alt="" />
                    </div>
                    <h5>Location</h5>
                    <h4>Visit us on</h4>
                  </div>
                  <ul>
                    <li>
                      320 Tower C, Noida One, Sector 62 Noida, Uttar Pradesh,
                      India.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 contact-info-block">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img src={call} alt="" />
                    </div>
                    <h5>24/7 service</h5>
                    <h4>Call us on</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="tel:8882414832">+91 8882414832</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 contact-info-block">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon">
                      <img src={mail} alt="" />
                    </div>
                    <h5>Drop a line</h5>
                    <h4>Mail us @</h4>
                  </div>
                  <ul>
                    <li>
                      <a href="mailto:sales@cybersigmacs.com">
                        sales@cybersigmacs.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-form-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="live-contact">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.435450113173!2d77.366464!3d28.623236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f84be111c5%3A0x13c7725a47435a!2sCyberSigma%20Consulting%20Services!5e0!3m2!1sen!2sin!4v1712733620126!5m2!1sen!2sin"
                    width="100%"
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="section-title">
                  <h2>
                    Don’t hesitate <br /> to send your message to us
                  </h2>
                  <div className="text-decoration">
                    <span className="left" />
                    <span className="right" />
                  </div>
                </div>
                <form method="post" action="" className="contact-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        name="message"
                        placeholder="Message goes here"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="row m-0 justify-content-between">
                        <button
                          className="default-btn text-decoration-none"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="btn-title">SEND MESSAGE</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    
    </>
  )
}

export default Contact