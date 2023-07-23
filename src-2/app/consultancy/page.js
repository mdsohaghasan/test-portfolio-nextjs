"use client";
import Image from "next/image";
import { useState } from "react";


const consultancy = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="py-8">
      {/* start Title */}
      <div className="container ">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Consultancy</h4>
          <h2 className="st-section-heading-subtitle">Consultancy</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
          {/* End Title */}

          <div className="container px-48">
          <div className="tabs">
            <ul className="list-none flex  gap-3 bg-[#101624] border-[#000] rounded-3xl py-2 px-3">
              <li className="border border-[#000] rounded-2xl py-1 px-3  text-center" > <button onClick={()=>handleTabClick(1)}> Sharīah Prescription</button></li>
              <li className="border border-[#000] rounded-2xl py-1 px-3  text-center" > <button onClick={()=>handleTabClick(2)}> Family Consultancy</button></li>
            </ul>
            {/* Shariyah Prescription from  */}
            <div className={activeTab === 1 ? "tab-content-active" : "tab-content"}>
               <h3>Sharīah Prescription</h3>
                 <p>Sharīah Prescription sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                  <form action="#" method="POST" className="st-contact-form" id="contact-form">
                  <div className="st-form-field">
                    <input type="text" id="name" name="name" placeholder="Your Name" required/>
                  </div>
                  <div className="st-form-field">
                    <input type="text" id="email" name="email" placeholder="Your Email" required/>
                  </div>
                  <div className="st-form-field">
                    <input type="text" id="subject" name="subject" placeholder="Your Subject" required/>
                  </div>
                  <div className="st-form-field">
                    <textarea cols="30" rows="10" id="msg" name="msg" placeholder="Your Message" required></textarea>
                  </div>
                  <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Send message</button>
                </form>
            </div>

            {/* Family Consultancy from  */}
            <div className={activeTab === 2 ? "tab-content-active" : "tab-content"}>
              <h3 >Family Consultancy</h3>
                 <p>Family Consultancy sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                  <form action="#" method="POST" className="st-contact-form" id="contact-form">
                  <div className="st-form-field">
                    <input type="text" id="name" name="name" placeholder="Your Name" required/>
                  </div>
                  <div className="st-form-field">
                    <input type="text" id="email" name="email" placeholder="Your Email" required/>
                  </div>
                  <div className="st-form-field">
                    <input type="text" id="subject" name="subject" placeholder="Your Subject" required/>
                  </div>
                  <div className="st-form-field">
                    <textarea cols="30" rows="10" id="msg" name="msg" placeholder="Your Message" required></textarea>
                  </div>
                  <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Send message</button>
                </form>
            </div>

          </div>

          </div>

    </div>
  );
};

export default consultancy;
