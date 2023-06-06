import "./card.css";
import Image from "next/image";

const Card = ({ image, title, desc, link }) => {
  return (
    <div className="card" style={{ minWidth: "340px", paddingTop: "15px" }}>
      <img
        src={image}
        className="img-thumbnail mx-auto"
        alt="Responsive image"
        style={{ height: "250px" }}
      />
      <div className="card-body flex-column d-flex">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href={link} target="_blank" className="btn btn-dark mt-auto">
          visit
        </a>
      </div>
    </div>
  );
};

export default Card;
