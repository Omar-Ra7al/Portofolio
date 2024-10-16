import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <div className="typing-container">
      <TypeAnimation
        sequence={[
          "",
          500,
          "Weclome 👋",
          500,
          "I Am Omar Rahal <R.Dev 💻/>",
          1500,
          "<Frontend Developer/>",
          1000,
          "Passionate about building interactive web applications.",
          1000,
          "",
          600,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
      />
    </div>
  );
}
