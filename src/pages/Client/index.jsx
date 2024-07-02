import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import client1 from "../../assets/img/client/01.png";
import client2 from "../../assets/img/client/02.png";
import client3 from "../../assets/img/client/03.png";
import client4 from "../../assets/img/client/04.png";
import client5 from "../../assets/img/client/05.jpg";
import client6 from "../../assets/img/client/06.png";
import client7 from "../../assets/img/client/07.png";
import client8 from "../../assets/img/client/08.png";
import client9 from "../../assets/img/client/09.jpg";
import client10 from "../../assets/img/client/10.png";

const clients = [
    { id: 1, src: client1 },
    { id: 2, src: client2 },
    { id: 3, src: client3 },
    { id: 4, src: client4 },
    { id: 5, src: client5 },
    { id: 6, src: client6 },
    { id: 7, src: client7 },
    { id: 8, src: client8 },
    { id: 9, src: client9 },
    { id: 10, src: client10 }
];

function Client() {
  const settings = {
    arrows: false, // Disable arrows
    dots: false, // Disable dots
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    
  };

  return (
    <div className="partner-area ptb-50" id="client">
      <div className="container">
        <div className="section-title text-center style-2" data-aos="fade-up">
          <span className="d-block">Our Clients</span>
          <h2 className="">We have some serious brand experience.</h2>
        </div>

        <div className="partner-slider-info centerImg" data-cue="slideInUp" data-show="true" style={{ animationName: 'slideInUp', animationDuration: '600ms', animationTimingFunction: 'ease', animationDelay: '0ms', animationDirection: 'normal', animationFillMode: 'both' }}>
      <Slider {...settings}>
        {clients.map(client => (
          <div key={client.id}>
            <img src={client.src} alt={`Client ${client.id}`} />
          </div>
        ))}
      </Slider>
    </div>
      </div>
    </div>
  );
}

export default Client;
