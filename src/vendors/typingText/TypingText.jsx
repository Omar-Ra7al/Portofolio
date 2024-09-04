import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <div className="typing-container">
      <TypeAnimation
        sequence={[
          "Who Am I !!",
          1500,
          "Omar Rahal",
          1500,
          "<Frontend Developer />",
          3000,
          "Passionate about building interactive web applications.",
          3000,
          "",
          600,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ display: "inline-flex", fontSize: "24px" }}
      />
    </div>
  );
}
