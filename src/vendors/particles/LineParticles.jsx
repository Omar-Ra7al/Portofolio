import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = ({ color, children }) => {
  const getParticlesOptions = (screenWidth) => {
    const particleNumber = screenWidth > 768 ? 60 : 40; // Adjust numbers based on your needs
    const linkDistance = screenWidth > 768 ? 150 : 100; // Adjust distance based on screen width

    return {
      background: { color: "" },
      fullScreen: { enable: false },
      particles: {
        color: { value: color },
        links: {
          color: color,
          distance: linkDistance,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: {
          density: { enable: false },
          value: particleNumber,
        },
        opacity: {
          value: 0.5,
          animation: { enable: true, speed: 1, minimumValue: 0.1 },
        },
        size: {
          value: 3,
          animation: { enable: true, speed: 5, minimumValue: 1 },
        },
      },
      interactivity: {
        events: {
          onClick: { enable: false, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 2 },
          repulse: { distance: 150, duration: 0.5 },
        },
      },
      detectRetina: true,
    };
  };

  const [particlesOptions, setParticlesOptions] = useState(
    getParticlesOptions(window.innerWidth)
  );

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setParticlesOptions(getParticlesOptions(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [color]);

  useEffect(() => {
    setParticlesOptions(getParticlesOptions(window.innerWidth));
  }, [color]);

  return (
    <div
      className="tsparticles-line-container"
      style={{ width: "100%", position: "relative" }}>
      {children}
      <Particles
        id="tsparticles"
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
    </div>
  );
};

export default ParticlesComponent;
