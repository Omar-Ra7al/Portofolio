import "./Button.css";
import { FaFileDownload } from "react-icons/fa";

export default function BtnCv() {
  return (
    <>
      <button className="btn-cv">
        <span>Download CV</span>
        <FaFileDownload className="download" />
      </button>
    </>
  );
}
