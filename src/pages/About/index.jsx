import React from 'react'
import about from "../../assets/img/about/about-5.jpg";


function About() {
  return (
    <>
     <div
        className="about-area style-2 ptb-50"
        id="about_us"
        data-aos="fade-down"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image style-2">
                <div className="image-1">
                  <img src={about} alt="about-image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content style-2">
                <div className="title">
                  <span className="d-block">About CyberSigma</span>
                  <h2>Shaping the Future of Digital Security .</h2>
                  <p>
                    CyberSigma is a PCI-QSA company offering services such as
                    PCI DSS Compliance, ISO Certification, VAPT, HIPAA, SOC and
                    GDPR. We are an independent cyber-security-based consultancy
                    with clients across the globe. Our team of cybersecurity
                    experts have consistently assisted organizations in
                    achieving compliance.
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

export default About