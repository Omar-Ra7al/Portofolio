import Swiper from "../../vendors/Swiper/Swiper";
import "./Testimonials.css";
import { FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import logo from "../../assets/logo/Black-Gold.png";
export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <section className="title">
          <p>Testimonials</p>
          <FaUsers />
        </section>
      </div>

      <Swiper>
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
      </Swiper>
    </section>
  );
}
