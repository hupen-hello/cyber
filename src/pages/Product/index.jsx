import React from 'react'
import Slider from "react-slick";

import sigm1 from "../../assets/img/sigmassist/01.png";
import sigm2 from "../../assets/img/sigmassist/02.png";
import sigm3 from "../../assets/img/sigmassist/03.png";

function Product() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust autoplay speed as needed
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (

    <>
     <div className="our_product_tabs">
          <div className="container-fluid">
            <div className="row recentProject-bg">
              <div className="recentProject-heading">
                <h2>
                  Featured <br /> Projects
                </h2>
              </div>
              <div className="col-md-10">
                <div className="tab_design">
                  <div className="tab-contentdff">
                    <div className="tab-contentt">
                      <div id="sigmassist" className="tab-pane active ">
                        <div className="row">
                          <div
                            className="col-md-3"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                          >
                            <div className="desc_c">
                              <p>
                                SigmAssist is our GRC tool that combines
                                governance, risk management and compliance in an
                                integrated model. It allows you to automate
                                compliance process, reduce company wastage and
                                simplifies information sharing. Say goodbye to
                                lengthy spreadsheet work{" "}
                              </p>
                            </div>
                          </div>
                          <div
                            className="col-md-9"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                          >
                            <div className="win_tab">
                              <div className="window-ui">
                                <i />
                                <i />
                                <i />
                              </div>
                              <div className="feature_img">
                                <div className="owl-carousel sigma">
                                  <Slider {...settings}>
                                    <div className="item">
                                      <img src={sigm1} />
                                    </div>
                                    <div className="item">
                                      <img src={sigm2} />
                                    </div>
                                    <div className="item">
                                      <img src={sigm3} />
                                    </div>
                                  </Slider>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="sigmaacademy" className="tab-pane fade">
                        <div className="row">
                          <div
                            className="col-md-3"
                            data-aos="fade-up"
                            data-aos-duration={6000}
                          >
                            <div className="desc_c">
                              <p>
                                Sigma Academy is a Learning Management System
                                (LMS). We have 100+ learning models on
                                cybersecurity, compliance, phishing awareness
                                etc. One of the standout features of Sigma
                                Academy is its flexible delivery options.
                                Whether learners prefer self-paced learning,
                                live virtual classrooms, or blended learning
                                environments, Sigma Academy accommodates various
                                learning styles and preferences
                              </p>
                            </div>
                          </div>
                          <div
                            className="col-md-9"
                            data-aos="fade-up"
                            data-aos-duration={6000}
                          >
                            <div className="win_tab">
                              <div className="window-ui">
                                <i />
                                <i />
                                <i />
                              </div>
                              <div className="feature_img">
                                <div className="owl-carousel sigma">
                                  <div className="item">
                                    <img src="assets/img/sigmassist/01.png" />
                                  </div>
                                  <div className="item">
                                    <img src="assets/img/sigmassist/02.png" />
                                  </div>
                                  <div className="item">
                                    <img src="assets/img/sigmassist/03.png" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="sigmasimulator" className="tab-pane fade">
                        <div className="row">
                          <div
                            className="col-md-3"
                            data-aos="fade-up"
                            data-aos-duration={9000}
                          >
                            <div className="desc_c">
                              <p>
                                Sigma Simulator is a cutting-edge phishing
                                awareness tool. It is designed to enhance
                                awareness about the threats of phishing and
                                online fraud. It mimics fraudulent messages that
                                are encountered in cyberspace. Sigma Simulator
                                simulates real-world phishing scenarios and
                                provides hands-on experience. It helps the users
                                make informed decisions and differentiate
                                authentic messages from the deceptive ones.
                              </p>
                            </div>
                          </div>
                          <div
                            className="col-md-9"
                            data-aos="fade-up"
                            data-aos-duration={9000}
                          >
                            <div className="win_tab">
                              <div className="window-ui">
                                <i />
                                <i />
                                <i />
                              </div>
                              <div className="feature_img">
                                <div className="owl-carousel sigma">
                                  <div className="item">
                                    <img src="assets/img/simulator/01.png" />
                                  </div>
                                  <div className="item">
                                    <img src="assets/img/simulator/02.png" />
                                  </div>
                                  <div className="item">
                                    <img src="assets/img/simulator/03.png" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="sigmacardscan" className="tab-pane fade">
                        <div className="row">
                          <div
                            className="col-md-3"
                            data-aos="fade-up"
                            data-aos-duration={12000}
                          >
                            <div className="desc_c">
                              <p>
                                Organizations are not allowed to store payment
                                card data in their system. SigmaCard Scan scans
                                the organization’s system and network to check
                                whether any type of card information is stored
                                or not.
                              </p>
                            </div>
                          </div>
                          <div
                            className="col-md-9"
                            data-aos="fade-up"
                            data-aos-duration={12000}
                          >
                            <div className="win_tab">
                              <div className="window-ui">
                                <i />
                                <i />
                                <i />
                              </div>
                              <div className="feature_img">
                                <div className="owl-carousel sigma">
                                  <div className="item">
                                    <img src="assets/img/sigmassist/01.png" />
                                  </div>
                                  <div className="item">
                                    <img src="assets/img/sigmassist/02.png" />
                                  </div>
                                  <div className="item">
                                    <img src="assets/img/sigmassist/03.png" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="sigmasiem" className="tab-pane fade">
                        <div className="row">
                          <div
                            className="col-md-3"
                            data-aos="fade-up"
                            data-aos-duration={12000}
                          >
                            <div className="desc_c">
                              <p>
                                SigmaSEIM is a fast and efficient tool that
                                sends out quick alerts when it detects something
                                suspicious. It helps the user identify and stop
                                security incidents before they can cause any
                                damage. SigmaSEIM will help your organization
                                comply with industry regulations and data
                                privacy laws{" "}
                              </p>
                            </div>
                          </div>
                          <div
                            className="col-md-9"
                            data-aos="fade-up"
                            data-aos-duration={12000}
                          >
                            <div className="win_tab">
                              <div className="window-ui">
                                <i />
                                <i />
                                <i />
                              </div>
                              <div className="feature_img">
                                <div className="owl-carousel sigma">
                                  <div className="item">
                                    <img src="assets/img/sigmassist/01.png" />
                                  </div>
                                  <div className="item">
                                    <img src="assets/img/sigmassist/02.png" />
                                  </div>
                                  <div className="item">
                                    <img src="assets/img/sigmassist/03.png" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <ul className="nav nav-tabs" role="tablist">
                  <li
                    className="nav-item"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#sigmassist"
                    >
                      {" "}
                      SigmAssist{" "}
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    data-aos="fade-up"
                    data-aos-duration={6000}
                  >
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#sigmaacademy"
                    >
                      {" "}
                      Sigma Academy Solution
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    data-aos="fade-up"
                    data-aos-duration={9000}
                  >
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#sigmasimulator"
                    >
                      {" "}
                      Sigma Simulator
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    data-aos="fade-up"
                    data-aos-duration={12000}
                  >
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#sigmacardscan"
                    >
                      {" "}
                      Sigma Card Scan
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    data-aos="fade-up"
                    data-aos-duration={15000}
                  >
                    <a className="nav-link" data-toggle="tab" href="#sigmasiem">
                      {" "}
                      Sigma SIEM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Product