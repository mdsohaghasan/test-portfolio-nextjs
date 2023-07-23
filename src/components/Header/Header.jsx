"use client";
import React from "react";
import Image from "next/image";
import photo from "./mokhter.jpg";
import Link from "next/link";

// Ripple Water Effect .....
// import { useEffect } from "react";
// import $ from "jquery";
// import "jquery.ripples";

// Particles Depandency .....
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import Link from "next/link";

const Header = () => {
  /*--------------------------------------------------------------
          9. Social Button Hover
        --------------------------------------------------------------*/
  // useEffect(() => {
  //   $(".st-social-btn").hover(function () {
  //     $(this).addClass("active").siblings().removeClass("active");
  //   });
  // }, []);

  // Jquery Ripple water effect .............
  // useEffect(() => {
  //   $(".st-ripple-version").ripples({
  //     resolution: 512,
  //     dropRadius: 20,
  //     perturbance: 0.04,
  //   });
  // }, []);

  /*--------------------------------------------------------------
          particles
        --------------------------------------------------------------*/
  // const particlesInit = useCallback(async (engine) => {
  //   console.log(engine);
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <section
      id="tsparticles"
      className="bg-gray-600 st-hero-wrap  st-parallax st-ripple-version "
    >
      {/* <Particles
        className="bg-image"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727,
              },
            },
            color: {
              value: "#ffffff",
            },
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.6,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      /> */}

      <div className="st-hero st-style1 ">
        <div className="container">
          <div className="st-hero-text">
            <h3>Assalamu Alaikum, I Am Professor </h3>
            <h1>
              Mokhter <br /> Ahmad
            </h1>
            <h2>Public Figure</h2>
            <div className="buttonSection flex gap-2">
              <div className="st-hero-btn">
                <Link
                  href="/about"
                  className="st-btn st-style1 st-color1 st-smooth-move"
                >
                  Get About 
                </Link>
              </div>
              <div class="wrapper">
                <div class="icon-wrapper">
                  <Link href="/lecture">
                    <i class="bi bi-play-circle"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Image - Social Link Group --> */}
      <div className="st-hero-img st-to-right">
        <Image className="wow fadeInRight" src={photo} alt="Hero" />
        <div className="st-social-group wow fadeInLeft">
          <div className="st-social-link">
            <Link
              href="https://www.facebook.com/professormokhterahmad"
              target="_blank"
              className="st-social-btn active"
            >
              <span className="st-social-icon">
                <i className="bi bi-facebook"></i>
              </span>
              <span className="st-icon-name">Facebook</span>
            </Link>
            <Link
              href="https://www.youtube.com/@mokhterahmad"
              target="_blank"
              className="st-social-btn"
            >
              <span className="st-social-icon">
                <i className="bi bi-youtube"></i>
              </span>
              <span className="st-icon-name">youtube</span>
            </Link>
            <Link
              href="https://twitter.com/mokhterahmad"
              target="_blank"
              className="st-social-btn"
            >
              <span className="st-social-icon">
                <i className="bi bi-twitter"></i>
              </span>
              <span className="st-icon-name">Twitter</span>
            </Link>
            <Link
              href="https://www.instagram.com/mokhter.ahmad" 
              target="_blank"
              className="st-social-btn"
            >
              <span className="st-social-icon">
                <i className="bi bi-instagram"></i>
              </span>
              <span className="st-icon-name">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com/in/mokhter-ahmad-b77ba257/?originalSubdomain=bd" target="_blank" className="st-social-btn">
              <span className="st-social-icon">
                <i className="bi bi-linkedin"></i>
              </span>
              <span className="st-icon-name">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
