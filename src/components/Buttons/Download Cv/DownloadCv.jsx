// Css
import "./DownloadCv.css";

// React Icons
import { FaCheckCircle } from "react-icons/fa";
import { BsFillSendArrowDownFill } from "react-icons/bs";

export default function CvBtn() {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1A3wBuMhc49lWoYsdoKaTRqIALaHYMLY9"
      download>
      <button className="send-button">
        <div className="outline"></div>
        <div className="state state--default">
          <div className="icon">
            <BsFillSendArrowDownFill />
          </div>
          <p>
            <span style={{ "--i": 0 }}>G</span>
            <span style={{ "--i": 1 }}>e</span>
            <span style={{ "--i": 2 }}>T</span>
            <span style={{ "--i": 3 }}>C</span>
            <span style={{ "--i": 4 }}>v</span>
          </p>
        </div>
        <div className="state state--sent">
          <div className="icon">
            <FaCheckCircle />
          </div>
          <p>
            <span style={{ "--i": 5 }}>D</span>
            <span style={{ "--i": 6 }}>o</span>
            <span style={{ "--i": 7 }}>n</span>
            <span style={{ "--i": 8 }}>e</span>
          </p>
        </div>
      </button>
    </a>
  );
}
