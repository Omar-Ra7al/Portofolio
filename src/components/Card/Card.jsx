import "./Card.css";
import logo from "../../assets/logo/White-Gold.png";
// import { FaLaptopCode } from "react-icons/fa";
// import { GiEgyptianProfile } from "react-icons/gi";
// import { FaStar } from "react-icons/fa";
// import { FiCamera } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"; // Social icons

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
          </div>
          <div className="view-more">
            <button className="view-more-button">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
