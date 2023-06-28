"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import styles from "app/styles/stars.module.css";


const Stars= () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    // <Particles
    //   className={styles.stars}
    //   params={{
    //     particles: {
    //       number: {
    //         value: 160,
    //         density: {
    //           enable: true,
    //           value_area: 1500,
    //         },
    //       },
    //       line_linked: {
    //         enable: false,
    //         opacity: 0.03,
    //       },
    //       move: {
    //         direction: "right",
    //         speed: 0.05,
    //       },
    //       size: {
    //         value: 1,
    //       },
    //       opacity: {
    //         anim: {
    //           enable: true,
    //           speed: 1,
    //           opacity_min: 0.05,
    //         },
    //       },
    //     },
    //     interactivity: {
    //       events: {
    //         onclick: {
    //           enable: true,
    //           mode: "push",
    //         },
    //       },
    //       modes: {
    //         push: {
    //           particles_nb: 1,
    //         },
    //       },
    //     },
    //     retina_detect: true,
    //   }}
    // />

    <Particles
      className={styles.stars}
      init={particlesInit}
      loaded={particlesLoaded}
      
      // options={{
        
      
      //   fpsLimit: 120,
      //   interactivity: {
      //     events: {
      //       onClick: {
      //         enable: true,
      //         mode: "push",
      //       },
      //       onHover: {
      //         enable: true,
      //         mode: "repulse",
      //       },
      //       resize: true,
      //     },
      //     modes: {
      //       push: {
      //         quantity: 4,
      //       },
      //       repulse: {
      //         distance: 200,
      //         duration: 0.4,
      //       },
      //     },
      //   },
      //   particles: {
      //     color: {
      //       value: "#ffffff",
      //     },
      //     links: {
      //       color: "#ffffff",
      //       distance: 150,
      //       enable: true,
      //       opacity: 0.5,
      //       width: 1,
      //     },
      //     collisions: {
      //       enable: true,
      //     },
      //     move: {
      //       direction: "none",
      //       enable: true,
      //       outModes: {
      //         default: "bounce",
      //       },
      //       random: false,
      //       speed: 6,
      //       straight: false,
      //     },
      //     number: {
      //       density: {
      //         enable: true,
      //         area: 800,
      //       },
      //       value: 80,
      //     },
      //     opacity: {
      //       value: 0.5,
      //     },
      //     shape: {
      //       type: "circle",
      //     },
      //     size: {
      //       value: { min: 1, max: 5 },
      //     },
      //   },
      //   detectRetina: true,
      // }}

      params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: false,
                opacity: 0.03,
              },
              move: {
                direction: "right",
                speed: 0.05,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
    />
  );
}

export default Stars;
