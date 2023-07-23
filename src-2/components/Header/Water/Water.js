'use client'
import React from 'react'

import {
  useEffect
} from 'react';
import $ from 'jquery';
import 'jquery.ripples';

import {
  useCallback
} from "react";
import Particles from "react-tsparticles";
import {
  loadFull
} from "tsparticles";

import photo from './waterBg.jpg';
import './Style.css'


const Water = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  // water effect .............




  useEffect(() => {
    $('.bg-image').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,

    });
  }, []);



  // useEffect(() => {
  //   if (containerRef.current) {
  //     tsParticles.load('particles-container', {
  //       /* Particle configuration options */
  //       particles: {
  //         // Other particle options...
  //       },
  //       /* Custom width and height */
  //       detectRetina: true,
  //       fpsLimit: 60,
  //       background: {
  //         color: '#000000',
  //       },
  //       interactivity: {
  //         detectsOn: 'canvas',
  //         events: {
  //           onHover: {
  //             enable: true,
  //             mode: 'repulse',
  //           },
  //           onClick: {
  //             enable: true,
  //             mode: 'push',
  //           },
  //         },
  //       },
  //       /* Custom width and height */
  //       width: '100%',
  //       height: '400px',
  //     });
  //   }
  // }, []);

  return (



    <
    Particles className = "bg-image"
    id = "tsparticles"
    init = {
      particlesInit
    }
    loaded = {
      particlesLoaded
    }
    options = {
      {
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 789.1476416322727
            }
          },
          "color": {
            "value": "#ffffff"
          },
          'fullScreen': {
            'enable': false,
            'zIndex': -1,
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.6,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 5,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
      
    }
    />


  )
}

export default Water