import Image from "next/image";
import React from "react";
import mokhter from "./mokhter.jpg";
import program1 from "./program1.jpg";
import program2 from "./program2.png";
import program3 from "./program3.jpg";

const Program = () => {
  return (
    <section>
      <div className="container">
        <div className="st-height-b100 st-height-lg-b80"></div>

        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Events</h4>
          <h2 className="st-section-heading-subtitle">Events </h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>

        <div className="flex gap-3">
          <div className="bg-[#101624] basis-2/5 relative  ">
            <Image src={mokhter} alt="Mokhtar Ahmad"  />
           
            <div className=" p-3 bg-[#101624] absolute  bottom-0 w-full ">
              <div className="title ">
                <h3 className="text-xl ps-1.5 m-0">Lecture Session On Positive Parenting</h3>
                <div className="">
                <i class="bi bi-geo-alt-fill "></i>
                <span className="px-2 text-base	">Adv. Tarek Memorial Auditorium, Mymensingh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#101624] basis-3/5">
          <div className="flex p-3">
              <div className="date basis-1/5">
                <h4 className="text-lg text-[#FEC544] m-0">20-07-2023</h4> <h6 className="text-lg">08:30 PM</h6>
              </div>
              <div className="thumbnail basis-1/5">
                <Image src={program2} alt="quran" className="rounded-lg" ></Image>
              </div>
              
              <div className="title basis-3/5">
                <h3 className="text-xl	px-3 m-0">Live Q&A Program, Sharīah Prescription</h3>
                <div className="px-3 ">
                <i class="bi bi-broadcast"></i>
                <span className="px-2">Social Media Platfrom</span>
                </div>
              </div>

            </div>
            <div className="flex p-3">
              <div className="date basis-1/5">
                <h4 className="text-lg text-[#FEC544] m-0">21-07-2023</h4> <h6 className="text-lg">12:30 PM</h6>
              </div>
              <div className="thumbnail basis-1/5">
                <Image src={program3} alt="quran" className="rounded-lg"></Image>
              </div>
              <div className="title basis-3/5">
                <h3 className="text-xl	px-3 m-0">Jumu'ah Khutbah</h3>
                <div className="px-3">
                <i class="bi bi-geo-alt-fill "></i>
                <span className="px-2">Masjid e Bilal Ra. Banasree, Dhaka</span>
                </div>
              </div>
            </div>
            <div className="flex p-3">
              <div className="date basis-1/5">
                <h4 className="text-lg text-[#FEC544] m-0">22-07-2023</h4> <h6 className="text-lg">05:00 PM</h6>
              </div>
              <div className="thumbnail basis-1/5">
                <Image src={program1} alt="quran" className="rounded-lg"></Image>
              </div>
              <div className="title basis-3/5">
                <h3 className="text-xl	px-3 m-0">লেকচার সেশন- হজ্জ পরবর্তী করনীয়</h3>
                <div className="px-3">
                <i class="bi bi-geo-alt-fill "></i>
                <span className="px-2">কুরআন স্কুল ক্যাম্পাস, ৮/১৬ ব্লক-এ, <span className="ps-4">লালমাটিয়া, ঢাকা</span></span>
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

export default Program;
