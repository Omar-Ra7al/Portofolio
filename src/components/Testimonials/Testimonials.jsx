// Css
import "./Testimonials.css";

// Vendors
import Swiper from "../../vendors/Swiper/Swiper";

// Logos
import logo from "../../assets/logo/Black-Gold.png";

// React Icons
import { FaUsers, FaStar } from "react-icons/fa";
// Framer Motion
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.section
          className="title"
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.3,
          }}>
          <p>Testimonials</p>
          <FaUsers />
        </motion.section>
      </div>

      <Swiper autoSlide={true} slideTime={5000}>
        <div className="slide">
          <div className="container">
            <div className="testimonials-card">
              <div className="person-profile">
                <img
                  loading="lazy"
                  className="testimonials-logo"
                  src={logo}
                  alt=""
                />
                <div className="person-data">
                  <p>Omar Rahal</p>
                  <span>Ceo</span>
                </div>
              </div>
              <div className="person-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ratione neque veniam laborum veritatis? Molestias aperiam
                  consequuntur facere itaque commodi, voluptate, quod, alias
                  temporibus distinctio eaque nemo saepe cupiditate magnam.
                </p>
                <div className="rate">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="container">
            <div className="testimonials-card">
              <div className="person-profile">
                <img className="testimonials-logo" src={logo} alt="" />
                <div className="person-data">
                  <p>Omar Rahal</p>
                  <span>Ceo</span>
                </div>
              </div>
              <div className="person-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ratione neque veniam laborum veritatis? Molestias aperiam
                  consequuntur facere itaque commodi, voluptate, quod, alias
                  temporibus distinctio eaque nemo saepe cupiditate magnam.
                </p>
                <div className="rate">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="container">
            <div className="testimonials-card">
              <div className="person-profile">
                <img className="testimonials-logo" src={logo} alt="" />
                <div className="person-data">
                  <p>Omar Rahal</p>
                  <span>Ceo</span>
                </div>
              </div>
              <div className="person-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  ratione neque veniam laborum veritatis? Molestias aperiam
                  consequuntur facere itaque commodi, voluptate, quod, alias
                  temporibus distinctio eaque nemo saepe cupiditate magnam.
                </p>
                <div className="rate">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
