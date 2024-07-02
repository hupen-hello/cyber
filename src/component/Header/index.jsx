import React,  { useState } from "react";

import logo from "../../assets/img/logo.png";
import { RiArrowRightLine } from "react-icons/ri";



function Header() {

  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar-area"); 

    if (window.scrollY > 0) {
      navbar.classList.add("is-sticky"); 
    } else {
      navbar.classList.remove("is-sticky"); 
    }
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    <div className="navbar-area style-2">
        <div className="mobile-responsive-nav">
          <div className="container">
            <div className="mobile-responsive-menu mean-container">
              <div className="mean-bar">
                <a
                  href="#nav"
                  className="meanmenu-reveal meanclose"
                  style={{ background: "", color: "", right: 0, left: "auto" }}
                >
                  <span>
                    <span>
                      <span />
                    </span>
                  </span>
                </a>
                <nav className="mean-nav">
                  <ul
                    className="navbar-nav m-auto head_meniU_list"
                    style={{ display: "none" }}
                  >
                    <li className="nav-item">
                      <a href="index.php" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about_us" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#what-we-do" className="nav-link">
                        What We Do
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#our_cap" className="nav-link">
                        Our Services{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#our-products" className="nav-link">
                        Our Products{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#why_choose" className="nav-link">
                        Why CyberSigma{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#client" className="nav-link">
                        Our Clients{" "}
                      </a>
                    </li>
                    <li className="nav-item d-none">
                      <a href="#" className="nav-link">
                        Consult with Us
                      </a>
                    </li>
                  </ul>
                  <div className="others-options">
                    <ul style={{ display: "none" }}>
                      <li className="mean-last">
                        <a
                          className="default-btn text-decoration-none"
                          href="#contact_us"
                        >
                          <i className="ri-arrow-right-line" />
                          Consult with Us
                        </a>
                        <a
                          className="quote d-none text-decoration-none"
                          href="#contact_us"
                        >
                          <i className="ri-chat-quote-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="logo">
                <a href="index.php">
                  <img src={logo} className="main-logo" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-nav style-2">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand me-0" href="index.php">
                <img src={logo} className="black-logo" alt="logo" />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto head_meniU_list">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about_us" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#what-we-do" className="nav-link">
                      What We Do
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#our_cap" className="nav-link">
                      Our Services{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#our-products" className="nav-link">
                      Our Products{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#why_choose" className="nav-link">
                      Why CyberSigma{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#client" className="nav-link">
                      Our Clients{" "}
                    </a>
                  </li>
                  <li className="nav-item d-none">
                    <a href="#" className="nav-link">
                      Consult with Us
                    </a>
                  </li>
                </ul>
                <div className="others-options">
                  <ul>
                    <li>
                      <a
                        className="default-btn text-decoration-none"
                        href="#contact_us"
                      >
                        <RiArrowRightLine
                          className="gola"
                          style={{ fontSize: "smaller" }}
                        />
                        Consult with Us
                      </a>
                      <a
                        className="quote d-none text-decoration-none"
                        href="#contact_us"
                      >
                        <i className="ri-chat-quote-line" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Header