import "./card.css";

const Card = () => {
  return (
    <div className="card" style={{ maxWidth: "280px", minWidth: "280px" }}>
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <a href="#" className="btn btn-primary">
          visit
        </a>
      </div>
    </div>
  );
};

export default Card;
