import React from 'react'

import pci from "../../assets/img/icon/pci.png";
import gdpr from "../../assets/img/icon/gdpr.png";
import vapt from "../../assets/img/icon/vapt.png";
import hipaa from "../../assets/img/icon/hipaa.png";
import ssae from "../../assets/img/icon/ssae.png";
import iso from "../../assets/img/icon/iso.png";
import lap from "../../assets/img/laptop.png";
import tab1 from "../../assets/img/tabs/1.jpg";

function Capability() {
  return (
    <>
    <div className="our_Capability" id="our_cap">
        <div className="container">
          <div className="section-title text-center" data-cue="slideInUp">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#menu1"
                  >
                    <div className="icon">
                      <img src={pci} />
                    </div>{" "}
                    PCI-DSS{" "}
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-duration={6000}
                >
                  <a className="nav-link" data-toggle="tab" href="#menu2">
                    <div className="icon">
                      <img src={ssae} />
                    </div>{" "}
                    SSAE 18
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-duration={9000}
                >
                  <a className="nav-link" data-toggle="tab" href="#menu3">
                    <div className="icon">
                      <img src={hipaa} />
                    </div>{" "}
                    HIPAA
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-duration={12000}
                >
                  <a className="nav-link" data-toggle="tab" href="#menu4">
                    <div className="icon">
                      <img src={vapt} />
                    </div>{" "}
                    VAPT
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-duration={15000}
                >
                  <a className="nav-link" data-toggle="tab" href="#menu5">
                    <div className="icon">
                      <img src={gdpr} />
                    </div>{" "}
                    GDPR
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-up"
                  data-aos-duration={18000}
                >
                  <a className="nav-link" data-toggle="tab" href="#menu6">
                    <div className="icon">
                      <img src={iso} />
                    </div>{" "}
                    ISO COMPLIANCE{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="lap_top">
                <img src={lap} />
                <div className="tab-content">
                  <div id="menu1" className="tab-pane active">
                    <img src={tab1} />
                  </div>
                  <div id="menu2" className="tab-pane fade">
                    <img src="assets/img/tabs/2.jpg" />
                  </div>
                  <div id="menu3" className="tab-pane fade">
                    <img src="assets/img/tabs/3.jpg" />
                  </div>
                  <div id="menu4" className="tab-pane fade">
                    <img src="assets/img/tabs/4.jpg" />
                  </div>
                  <div id="menu5" className="tab-pane fade">
                    <img src="assets/img/tabs/5.jpg" />
                  </div>
                  <div id="menu6" className="tab-pane fade">
                    <img src="assets/img/tabs/6.jpg" />
                  </div>
                  <div id="menu7" className="tab-pane fade">
                    <img src="assets/img/tabs/7.jpg" />
                  </div>
                </div>
              </div>
            </div>
            {/* Tab panes */}
          </div>
        </div>
        </div>
    
    </>
  )
}

export default Capability