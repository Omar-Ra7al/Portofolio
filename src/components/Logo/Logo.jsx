import "./Logo.css";

// Logo Img
import lightLogo from "../../assets/logo/White-Gold.png";
import darkLogo from "../../assets/logo/Black-Gold.png";
export default function Logo({ theme }) {
  return (
    <div className="logo-container">
      <div className="profile-img">
        <img className="svg" src={theme ? lightLogo : darkLogo} alt="logo" />
      </div>
      <div className="ripple-container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
