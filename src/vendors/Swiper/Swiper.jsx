import "./Swiper.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { Children, useState, useEffect } from "react";
export default function Swiper({
  children,
  autoSlide = false,
  slideTime = 3000,
}) {
  const childrenCount = Children.count(children);
  const [slide, setSlide] = useState(0);

  // Bullets
  let bullets = [];

  if (childrenCount > 1) {
    for (let i = 0; i < childrenCount; i++) {
      bullets.push(
        <span
          key={i}
          className={`bullet ${slide == i ? "active" : ""}`}
          onClick={() => {
            setSlide(i);
          }}></span>
      );
    }
  }
  useEffect(() => {
    if (autoSlide) {
      // Auto Slide >>
      const intervalId = setInterval(() => {
        if (slide === childrenCount - 1) {
          setSlide(0);
        } else {
          setSlide((prevCount) => prevCount + 1);
        }
      }, slideTime);

      // Cleanup the interval when component unmounts
      return () => clearInterval(intervalId);
    }
  }, [slide]);

  // Handle slide Fn >>
  const slideRight = () => {
    if (slide < childrenCount - 1) {
      setSlide(slide + 1);
    }
    // Children.forEach((img) => {
    // });
  };
  const slideLeft = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };
  return (
    <div className="swiper">
      {/* Images Wrapper */}
      <div className="swiper-wrapper">
        {/* Bullets */}

        {childrenCount > 1 ? (
          <div className="bullets-warpper">
            {bullets.map((span) => {
              return span;
            })}
          </div>
        ) : (
          <></>
        )}

        <div className="images-wrapper" style={{ marginLeft: `-${slide}00%` }}>
          {children}
        </div>

        {/* Indecators */}
        {childrenCount > 1 ? (
          <div className="indecators">
            <span
              onClick={() => {
                slideRight();
              }}
              className="right">
              <IoIosArrowForward />
            </span>
            <span
              onClick={() => {
                slideLeft();
              }}
              className="left">
              <IoIosArrowBack />
            </span>
          </div>
        ) : (
          <></>
        )}
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
}
