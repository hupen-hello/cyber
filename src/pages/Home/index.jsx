import React,  { useState,  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



import { RiArrowUpLine } from 'react-icons/ri';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/style.css";
import "../..//styles/bootstrap.min.css";
import "../../styles/meanmenu.min.css";
// import './styles/owl.carousel.min.css';
// import './styles/remixicon.css';
import "../../styles/owl.theme.default.min.css";
import "../../styles/responsive.css";
import "../../styles/scrollCue.css";

import "../../assets/js/custom.js";
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/js/meanmenu.min.js";
import "../../assets/js/owl.carousel.min.js";
import "../../assets/js/scrollCue.min.js";





import whatsapp from "../../assets/img/whatsapp-icon.png";
import phone from "../../assets/img/phone.png";

import Header from "../../component/Header";
import Footer from "../../component/Footer";
import About from "../About";
import Wedo from "../Wedo";
import Capability from "../Capability";
import Product from "../Product";
import Ourproduct from "../Ourproduct";
import Verife from "../Verife";
import Video from "../Video";
import Certificate from "../Certificate";
import Client from "../Client";
import Contact from "../Contact";






function Home() {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Start Navbar Area */}
      <Header/>
      {/* End Navbar Area */}

      
     <Video/>
     
      {/* Start About Area */}
     <About/>
      {/* End About Area */}

      {/* What we do Section start */}
      <Wedo/>
      {/*  What we do Section  end */}

      {/* Start Service Area */}
      <Capability/>
      {/* End Service Area  */}

        {/*--------------Product-----------------*/}
       <Product/>
        {/*--------------Product-----------------*/}

        {/* Our Product start */}
       <Ourproduct/>
       {/* Our product End  */}

       {/* Verifaction start  */}
       <Verife/>
        {/* Verifecation end  */}
        {/* Certificate start  */}
       <Certificate/>
        {/* Certificate End  */}

        {/* Start Partner Area */}
        {/* Clients start  */}
       <Client/>
        {/* Clients End  */}

        {/* End Partner Area */}
      <Contact/>

        {/* Start Footer Area */}
        <Footer/>
        {/* End Footer Area */}
        {/* Start Copyright Area */}
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-content text-center">
              <p>
                Copyright @ 2024 <strong>CyberSigma</strong>, All Rights
                Reserved. Designed by:{" "}
                <a href="https:cssfounder.com" target="_blank">
                  <strong>CssFounder.com</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* End Copyright Area */}
        {/* Back to Top */}
        {showGoTop && (
          <div className="go-top active" onClick={handleGoTop}>
            <RiArrowUpLine />
          </div>
        )}
        <div className="phone_ion comon_icon">
          <a href="tel:+918882414832" target="_blank">
            <img src={phone} border={0} />
          </a>
        </div>
        <div className="whatsapp comon_icon">
          <a href="https://api.whatsapp.com/send?phone=918882414832&text=Hello">
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </div>
     
    </>
  );
}

export default Home;
