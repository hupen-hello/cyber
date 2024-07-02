import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";
import Slider from "react-slick";

import sigm1 from "../../assets/img/sigmassist/01.png";
import sigm2 from "../../assets/img/sigmassist/02.png";
import sigm3 from "../../assets/img/sigmassist/03.png";

function Ourproduct() {

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
     <div className="our_products" id="our-products">
          <div className="container">
            <div
              className="section-title text-center style-2"
              data-cue="slideInUp"
            >
              <h2>Our Features</h2>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="tab_slider">
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
              <div className="col-md-5">
                <div className="desc">
                  <h3>SigmAssist </h3>
                  <p>
                    SigmAssist is our GRC tool that combines governance, risk
                    management and compliance in an integrated model. It allows
                    you to automate compliance process, reduce company wastage
                    and simplifies information sharing. Say goodbye to lengthy
                    spreadsheet work
                  </p>
                  <a
                    className="default-btn text-decoration-none"
                    href="#contact_us"
                  >
                    <RiArrowRightLine
                      className="gola"
                      style={{ fontSize: "smaller" }}
                    />
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="tab_slider">
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
              <div className="col-md-5">
                <div className="desc">
                  <h3>Sigma Academy</h3>
                  <p>
                    Sigma Academy is a Learning Management System (LMS). We have
                    100+ learning models on cybersecurity, compliance, phishing
                    awareness etc. One of the standout features of Sigma Academy
                    is its flexible delivery options. Whether learners prefer
                    self-paced learning, live virtual classrooms, or blended
                    learning environments, Sigma Academy accommodates various
                    learning styles and preferences
                  </p>
                  <a
                    className="default-btn text-decoration-none"
                    href="#contact_us"
                  >
                    <RiArrowRightLine
                      className="gola"
                      style={{ fontSize: "smaller" }}
                    />
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="tab_slider">
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
              <div className="col-md-5">
                <div className="desc">
                  <h3>Sigma Simulator</h3>
                  <p>
                    Sigma Simulator is a cutting-edge phishing awareness tool.
                    It is designed to enhance awareness about the threats of
                    phishing and online fraud. It mimics fraudulent messages
                    that are encountered in cyberspace. Sigma Simulator
                    simulates real-world phishing scenarios and provides
                    hands-on experience. It helps the users make informed
                    decisions and differentiate authentic messages from the
                    deceptive ones.
                  </p>
                  <a
                    className="default-btn text-decoration-none"
                    href="#contact_us"
                  >
                    <RiArrowRightLine
                      className="gola"
                      style={{ fontSize: "smaller" }}
                    />
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="tab_slider">
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
              <div className="col-md-5">
                <div className="desc">
                  <h3>Sigma Card Scan</h3>
                  <p>
                    Organizations are not allowed to store payment card data in
                    their system. SigmaCard Scan scans the organization’s system
                    and network to check whether any type of card information is
                    stored or not.{" "}
                  </p>
                  <a
                    className="default-btn text-decoration-none"
                    href="#contact_us"
                  >
                    <RiArrowRightLine
                      className="gola"
                      style={{ fontSize: "smaller" }}
                    />
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <div className="tab_slider">
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
              <div className="col-md-5">
                <div className="desc">
                  <h3>Sigma SIEM</h3>
                  <p>
                    SigmaSEIM is a fast and efficient tool that sends out quick
                    alerts when it detects something suspicious. It helps the
                    user identify and stop security incidents before they can
                    cause any damage. SigmaSEIM will help your organization
                    comply with industry regulations and data privacy laws
                  </p>
                  <a
                    className="default-btn text-decoration-none"
                    href="#contact_us"
                  >
                    <RiArrowRightLine
                      className="gola"
                      style={{ fontSize: "smaller" }}
                    />
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Ourproduct