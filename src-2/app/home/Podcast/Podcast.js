"use client";
import React, { useState } from "react";
import Image from "next/image";
import podcast from "./Podcast.jpeg";
import title from "./title.png";
import btnPart from "./btn-part.png";
// import ConfigPodcast from "./ConfigPodcast";
// import audioFile from "./podcast.wav";
// import ReactAudioPlayer from 'react-audio-player';
// import ReactHowler from 'react-howler'



// Ripple Water Effect .....
import { useEffect } from "react";
import $ from "jquery";
import "jquery.ripples";

const Podcast = () => {
  // Jquery Ripple water effect .............
  useEffect(() => {
    $(".st-ripple-version").ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
  }, []);

  // const [isPlaying, setIsPlaying] = useState(false);

  // const myAudio = new Audio(audioFile);
  // myAudio.play();
  // console.log(myAudio);

  return (
    <section id="podcast">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="flex">
          <div className="bg-[#101624] py-4  ">
            <div className="title">
              <Image src={title} alt="play" />
              {/* <ConfigPodcast></ConfigPodcast> */}
            </div>
            <div className="podcastButton grid grid-cols-2 gap-3 ms-20 mr-16 py-2">
              <div className="flex  bg-gradient-to-b from-[#333333] to-[#000000]  rounded flex justify-start items-center st-ripple-version">
                <i class="bi bi-play-fill text-3xl ms-3"></i>
                <Image src={btnPart} alt="btn" className="part mx-3"></Image>
                <span className="text-[#D6D6D6] text-1xl">Iman Booster</span>
              </div>
              <div className="flex  bg-gradient-to-b from-[#333333] to-[#000000]  rounded flex justify-start items-center st-ripple-version">
                <i class="bi bi-play-fill text-3xl px-3"></i>
                <Image src={btnPart} alt="btn" className="part me-3"></Image>
                <span className="text-[#D6D6D6] text-1xl">Iman Booster</span>
              </div>
              <div className="flex  bg-gradient-to-b from-[#333333] to-[#000000]  rounded flex justify-start items-center st-ripple-version">
                <i class="bi bi-play-fill text-3xl px-3"></i>
                <Image src={btnPart} alt="btn" className="part me-3"></Image>
                <span className="text-[#D6D6D6] text-1xl">Iman Booster</span>
              </div>
              <div className="flex  bg-gradient-to-b from-[#333333] to-[#000000]  rounded flex justify-start items-center st-ripple-version">
                <i class="bi bi-play-fill text-3xl px-3"></i>
                <Image src={btnPart} alt="btn" className="part me-3"></Image>
                <span className="text-[#D6D6D6] text-1xl">Iman Booster</span>
              </div>
              <div className="flex  bg-gradient-to-b from-[#333333] to-[#000000]  rounded flex justify-start items-center st-ripple-version">
                <i class="bi bi-play-fill text-3xl px-3"></i>
                <Image src={btnPart} alt="btn" className="part me-3"></Image>
                <span className="text-[#D6D6D6] text-1xl">Iman Booster</span>
              </div>
              <div className="flex  bg-gradient-to-b from-[#333333] to-[#000000]  rounded flex justify-start items-center st-ripple-version">
                <i class="bi bi-play-fill text-3xl px-3"></i>
                <Image src={btnPart} alt="btn" className="part me-3"></Image>
                <span className="text-[#D6D6D6] text-1xl">Iman Booster</span>
              </div>
              <div className="flex  bg-gradient-to-b from-[#333333] to-[#000000]  rounded flex justify-start items-center st-ripple-version">
                <i class="bi bi-play-fill text-3xl px-3"></i>
                <Image src={btnPart} alt="btn" className="part me-3"></Image>
                <span className="text-[#D6D6D6] text-1xl">Iman Booster</span>
              </div>
              <div className="flex  bg-gradient-to-b from-[#333333] to-[#000000]  rounded flex justify-start items-center st-ripple-version">
                <i class="bi bi-play-fill text-3xl px-3"></i>
                <Image src={btnPart} alt="btn" className="part me-3"></Image>
                <span className="text-[#D6D6D6] text-1xl">Iman Booster</span>
              </div>
            </div>
            <div className="flex justify-center my-3">
              <button className=" border-[#6D6E71] border-2 py-1 px-10 text-white rounded-xl ">
                See More
              </button>
            </div>
            <div>
              {/* <button onclick="playVideo()"> 
                  <i class="bi bi-play-fill"></i>
              </button> 
              <button onclick="pauseVideo()"> 
                 <i class="bi bi-pause-fill"></i>  
              </button>  */}

              {/* <button onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? 'Pause' : 'Play'}
               </button>

              <br/>      
              <audio src='/src/app/home/Podcast/podcast.wav' controls={false} autoPlay={isPlaying} type="audio/ogg"/> */}
              {/* <audio controls>
                <source src={audioFile} type="audio/mpeg" />
              </audio> */}
{/* 
                    <ReactAudioPlayer
                      src={audioFile}
                      autoPlay
                      controls
                    /> */}


                  {/* <ReactHowler src='http://goldfirestudios.com/proj/howlerjs/sound.ogg' playing={true}/> */}

            </div>
          </div>
          <div className="w-3/6">
            <Image src={podcast} alt="podcast" />
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Podcast;
