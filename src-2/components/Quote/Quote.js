import Image from "next/image";
import React, { useEffect } from "react";
import mokhter from "./mokhter.png";
import quote from "./quote.png";

// slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.min.js';
import $ from 'jquery';

const Quote = () => {
  
  
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1000,
    adaptiveHeight: true
  };
  
  
  

  return (
    <section id="quote">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Quote</h4>
          <h2 className="st-section-heading-subtitle">Quote</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      {/* end titiel */}

      <div className="container">
        <div className="flex gap-3">
          <div className="w-4/6">
          <Image src={quote} alt="quote" className="w-40 "/>
             {/* slide section  */}

             <Slider {...settings}>
                  <div className="">
                    <p>
                    Here in the United States our Muslim citizens are making many contributions in business, science and law, medicine and education, and in other fields.
                     Muslim members of our Armed Forces and of my administration are serving their fellow Americans with distinction,"
                    </p>
                    <h4>-Prof. Mokhter Ahmad</h4>
                  </div>
                  <div className="">
                    <p>
                    "Over the past month, Muslims have fasted, taking no food or water during daylight hours, in order to refocus their minds on faith and redirect their hearts to charity.
                     Muslims worldwide have stretched out a hand of mercy to those in need."
                    </p>
                    <h4>-Prof. Mokhter Ahmad</h4>
                  </div>
                  <div className="">
                    <p>
                    Islam brings hope and comfort to millions of people in my country, and to more than a billion people worldwide. 
                    Ramadan is also an occasion to remember that Islam gave birth to a rich civilization of learning that has benefited mankind."
                    </p>
                    <h4>-Prof. Mokhter Ahmad</h4>
                  </div>
                  <div className="">
                    <p>
                    "Islam is a vibrant faith. Millions of our fellow citizens are Muslim. We respect the faith. We honor its traditions. 
                    Our enemy does not. Our enemy doesnt follow the great traditions of Islam. Theyve hijacked a great religion"
                    </p>
                    <h4>-Prof. Mokhter Ahmad</h4>
                  </div>
            </Slider>

              {/* slide section  */}
          </div>

          <div className="w-2/6">
            <Image src={mokhter} alt="quote" />
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Quote;

{/* <div className="w-4/6">
  
</div> */}


