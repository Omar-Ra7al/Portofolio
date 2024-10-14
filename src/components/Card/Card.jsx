// Css
import "./Card.css";

// Assets
import logo from "../../assets/logo/White-Gold.png";

// React Icons
import {
  FaLaptopCode,
  // FaStar,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa"; // Social icons
// import { GiEgyptianProfile } from "react-icons/gi";
// import { FiCamera } from "react-icons/fi";

export default function CardComponent() {
  return (
    // <div className="card-component">
    //   <div className="descripe-card-container">
    //     <div className="descripe-card-logo">
    //       <div className="img-holder">
    //         <img src={logo} alt="" />
    //       </div>

    //       <div className="content">
    //         <div className="name">
    //           <p>Omar Rahal 👋</p>
    //           <p>
    //             Front-End Developer
    //             <FaLaptopCode />
    //           </p>
    //           <p>
    //             Egypt
    //             <GiEgyptianProfile />
    //           </p>
    //           <div className="stars">
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="parent">
      <div className="card-descripe">
        <div className="descripe-logo">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5">
            {/* <FiCamera className="icon" size={30} />  */}
            <p style={{ color: "white", fontFamily: "cursive" }}>R.Dev</p>
          </span>
        </div>
        <div className="glass"></div>
        <div className="descripe-content">
          <img src={logo} alt="" />
          <span className="descripe-title">Omar Rahal</span>
          <span className="text">
            Frontend Devolper <FaLaptopCode />
          </span>
        </div>
        <div className="bottom">
          <div className="social-buttons-container">
            <button className="social-button social-button1">
              <FaInstagram className="icon" size={30} />
            </button>
            <button className="social-button social-button2">
              <FaTwitter className="icon" size={30} />
            </button>
            <button className="social-button social-button3">
              <FaGithub className="icon" size={30} />
            </button>
            <button className="social-button social-button4">
              <FaFacebook className="icon" size={30} />
            </button>
            <button className="social-button social-button5">
              <FaWhatsapp className="icon" size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
