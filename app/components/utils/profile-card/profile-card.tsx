import "./profile-card.css";
import Image from "next/image";
import dp from "../../../../public/dp.png";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
});

const ProfileCard = () => {
  return (
    <div className="card-container">
      <div className="child-container">
        <Image className="image" src={dp} alt="" />
        <h1 className={fugaz.className}>Ashraf Azemi</h1>
        <h2 className={fugaz.className}>Self-taught Software Developer</h2>
        <div className="logo-container">
          <div className="logo" style={{ backgroundColor: "#607D8B" }}>
            <i
              className="bi bi-envelope"
              style={{ fontSize: "45px", color: "white" }}
            ></i>
          </div>
          <div className="logo" style={{ backgroundColor: "#0A66C2" }}>
            <i
              className="bi bi-linkedin"
              style={{ fontSize: "45px", color: "white" }}
            ></i>
          </div>
          <div className="logo" style={{ backgroundColor: "black" }}>
            <i
              className="bi bi-github"
              style={{ fontSize: "45px", color: "white" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
