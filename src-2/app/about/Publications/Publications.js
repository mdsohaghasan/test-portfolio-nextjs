import React from "react";
import Image from "next/image";
import PubImg from "./publication.png";
import nasihah from "./nasihah.jpg";
import './Publications.css'


const Publications = () => {
  return (
    <section>
      <div className="container">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">Publications</h4>
            <h2 className="st-section-heading-subtitle">Publications </h2>
          </div>
          <div className="st-height-b50 st-height-lg-b50"></div>

          <div className="flex gap-3">
            <div className="basis-1/2	">
              <Image src={PubImg} alt="Publications"  />
            </div>
            <div className="basis-1/2 bg-[#101624]	">

              <div className="flex px-4 pt-4 pb-2">
                  <div className="thumbnail basis-1/5">
                    <Image src={nasihah} alt="quran" className="rounded-lg"  className="bookimg"></Image>
                  </div>
                  <div className="title basis-3/5">
                    <h3 className="text-2xl	px-3 mt-2 mb-0">সোনালি যুগের মায়েরা </h3>
                    <div className="px-3 ">
                    <span>by Tarbiyah Publication</span>
                    </div>
                  </div>
               </div>
              <div className="flex px-4 py-2">
                  <div className="thumbnail basis-1/5">
                    <Image src={nasihah} alt="quran" className="rounded-lg" className="bookimg"></Image>
                  </div>
                  <div className="title basis-3/5">
                    <h3 className="text-2xl	px-3 mt-2 mb-0">তালিবুল ইলম</h3>
                    <div className="px-3 ">
                    <span>by Tarbiyah Publication</span>
                    </div>
                  </div>
               </div>
              <div className="flex px-4 pt-2 pb-4 ">
                  <div className="thumbnail basis-1/5">
                    <Image src={nasihah} alt="quran" className="rounded-lg" className="bookimg" ></Image>
                  </div>
                  <div className="title basis-3/5">
                    <h3 className="text-2xl	px-3 mt-2 mb-0">নাসিহা   </h3>
                    <div className="px-3 ">
                    <span>by Tarbiyah Publication </span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </div>
    </section>
  );
};

export default Publications;
