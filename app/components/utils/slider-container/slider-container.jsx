import "./slider-container.css";
import Card from "../card/card";

const SliderContainer = ({ ...props }) => {
  const { projects } = props;
  console.log("projects", projects);
  return (
    <div className="slider-container">
      <h1>PROJECTS</h1>
      <div className="carousel">
        {projects.map((e, i) => {
          console.log("output", e);
          console.log("output");
          const { image, link, desc, title } = e;

          return (
            <Card key={i} image={image} link={link} desc={desc} title={title} />
          );
        })}
      </div>
    </div>
  );
};

export default SliderContainer;
