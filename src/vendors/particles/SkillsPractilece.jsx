import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import html5Logo from "../../assets/svgs/html-5.svg";
import css3Logo from "../../assets/svgs/css-3.svg";
import javascriptLogo from "../../assets/svgs/javascript-1.svg";
import nextjsLogo from "../../assets/svgs/nextjs-1.svg";
import reactLogo from "../../assets/svgs/react.svg";
import reduxLogo from "../../assets/svgs/redux.svg";
import viteLogo from "../../assets/svgs/vite.svg";
import bootstrapLogo from "../../assets/svgs/bootstrap-5.svg";
import tailwindcssLogo from "../../assets/svgs/tailwindcss.svg";
import vscLogo from "../../assets/svgs/Vsc.svg";
import typescriptLogo from "../../assets/svgs/typescript.svg";
import gitLogo from "../../assets/svgs/git.svg";
import gitHubLogo from "../../assets/svgs/github.svg";

// eslint-disable-next-line react/prop-types
const ParticlesComponent = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);

    // Set the canvas size manually after initialization
    const canvas = document.querySelector("#tsparticles2 canvas");
    if (canvas) {
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    }
  }, []);

  const particlesOptions = {
    fullScreen: {
      enable: false, // Disable full-screen mode
    },
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          area: "100%", // Adjust based on the size of the container
        },
      },
      shape: {
        type: ["image"],
        image: [
          { src: html5Logo, height: 30, width: 30 },
          { src: css3Logo, height: 30, width: 30 },
          { src: javascriptLogo, height: 30, width: 30 },
          { src: nextjsLogo, height: 30, width: 30 },
          { src: reactLogo, height: 30, width: 30 },
          { src: reduxLogo, height: 30, width: 30 },
          { src: viteLogo, height: 30, width: 30 },
          { src: bootstrapLogo, height: 30, width: 35 },
          { src: tailwindcssLogo, height: 30, width: 35 },
          { src: vscLogo, height: 30, width: 30 },
          { src: typescriptLogo, height: 30, width: 30 },
          { src: gitLogo, height: 30, width: 30 },
          { src: gitHubLogo, height: 30, width: 30 },
        ],
      },
      size: {
        value: 15,
        random: false,
        anim: {
          enable: false,
          speed: 5,
          size_min: 10,
          sync: true,
        },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce", // Particles bounce on container edges
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: "slow", // Particles slow down on hover
        },
      },
      modes: {
        slow: {
          radius: 150,
          factor: 3, // Controls how slow particles become on hover
        },
      },
    },
    retinaDetect: true, // Adjusts particles for retina screens
  };

  useEffect(() => {
    // Ensuring proper size adjustments
    const handleResize = () => {
      const canvas = document.querySelector("#tsparticles2 canvas");
      if (canvas) {
        canvas.style.width = "100%";
        canvas.style.height = "100%";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="tsparticles-skills-container"
      style={{
        width: "100%",
        zIndex: 1,
        position: "relative",
      }}>
      <Particles
        id="tsparticles2"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div
        className="skills-content"
        style={{
          position: "relative",
          zIndex: 1,
        }}>
        {children}
      </div>
    </div>
  );
};

export default ParticlesComponent;
