import Image from "next/image";
import React from "react";
import paper from "./reachers.png";
import Link from "next/link";

const Papers = () => {
  return (
    <section className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Research</h4>
          <h2 className="st-section-heading-subtitle">Research </h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="container">
        <div className="flex items-center	 py-5">
          <div className="basis-6/12 mr-11">
            <Image src={paper} alt="quran" />
          </div>
          <div className="basis-6/12">
            <div className="my-4">
              <div className="flex mb-2">
                <h4 className="pr-5 text-slate-400">01</h4>
                <h4 className="text-slate-400">
                  Synopsis of ‘The Ethics of Disagreement in Islam’
                </h4>
                <Link href="https://www.academia.edu/86919989/Synopsis_of_The_Ethics_of_Disagreement_in_Islam_"
                      target="_blank">
                  <i class="bi bi-arrow-up-right-square pl-5 text-slate-400"></i>
                </Link>
              </div>
            </div>

            <div className="my-4">
              <div className="flex mb-2">
                <h4 className="pr-5 text-slate-400">02</h4>{" "}
                <h4 className="text-slate-400">
                Omens and their Impacts in Bangladesh: Remedy from an Islamic Management Perspective
                </h4>
                <Link href="https://www.academia.edu/71172438/Omens_and_their_Impacts_in_Bangladesh_Remedy_from_an_Islamic_Management_Perspective"
                      target="_blank">
                  <i class="bi bi-arrow-up-right-square pl-5 text-slate-400"></i>
                </Link>
              </div>
            </div>

            <div className="my-4">
              <div className="flex mb-2">
                <h4 className="pr-5 text-slate-400">03</h4>{" "}
                <h4 className="text-slate-400">
                     Zakat Management In Brunei Darussalam: A Case Study Zakat Management In Brunei Darussalam: A Case Study
                </h4>
                <Link href="https://www.academia.edu/5326631/ZAKAT_MANAGEMENT_IN_BRUNEI_DARUSSALAM_A_CASE_STUDY_ZAKAT_MANAGEMENT_IN_BRUNEI_DARUSSALAM_A_CASE_STUDY"
                      target="_blank" >
                  <i class="bi bi-arrow-up-right-square pl-5 text-slate-400"></i>
                </Link>
              </div>
            </div>

            <div className="my-4">
              <div className="flex mb-2 ">
                <h4 className="pr-5 text-slate-400">04</h4>{" "}
                <h4 className="text-slate-400">
                  Reviewing Imam Al-shafi‘i’s Tafsir Ayat Al-ahkam For Developing Principles Of Contemporary Tafsir Literature
                </h4>
                <Link href="https://www.academia.edu/53497924/Reviewing_Imam_Al_Shafi_i_s_Tafsir_Ayat_Al_Ahkam_for_Developing_Principles_of_Contemporary_Tafsir_Literature"
                      target="_blank" >
                  <i class="bi bi-arrow-up-right-square pl-5 text-slate-400"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Papers;
