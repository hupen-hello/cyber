import React from 'react'
import wedo from "../../assets/img/what-we-do.jpg";


function Wedo() {
  return (
    <>
    <div
        className="about-area2 style-2 ptb-50"
        id="what-we-do"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image style-2">
                <div className="image-1">
                  <img src={wedo} alt="about-image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content style-2">
                <div className="title">
                  <h2>What we do?</h2>
                  <p>
                    At CyberSigma, we specialize in providing comprehensive
                    cybersecurity solutions to safeguard your digital assets and
                    ensure regulatory compliance. Our dedicated team of
                    cybersecurity professionals is committed to delivering
                    tailored solutions and steadfast support to help
                    organizations achieve and maintain compliance, safeguarding
                    their reputation and fostering trust among stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Wedo