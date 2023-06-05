import "./slider-container.css";
import Card from "../card/card";

const SliderContainer = () => {
  return (
    <div className="slider-container">
      <h1>PROJECTS</h1>
      <div className="carousel">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SliderContainer;
