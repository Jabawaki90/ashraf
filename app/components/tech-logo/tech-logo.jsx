import "./tech-logo.css";
import Image from "next/image";

const logo = [
  { name: "nodejs", src: "https://img.icons8.com/color/144/nodejs.png" },
  {
    name: "javascript",
    src: "https://img.icons8.com/color/144/javascript--v1.png",
  },
  {
    name: "html5",
    src: "https://img.icons8.com/color/144/html-5--v1.png",
  },
  {
    name: "css",
    src: "https://img.icons8.com/color/144/css3.png",
  },
  {
    name: "reactjs",
    src: "https://img.icons8.com/officel/144/000000/react.png",
  },
];

const TechLogo = () => {
  const node = "https://img.icons8.com/color/144/nodejs.png";
  return (
    <div className="tech-logo-container">
      {logo.map((e, key) => {
        return (
          <img key={key} width="144" height="144" src={e.src} alt={e.name} />
        );
      })}
    </div>
  );
};

export default TechLogo;
