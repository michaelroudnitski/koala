import React from "react";
import WorkPreview from "../Misc/WorkPreview";
import "./MyWork.scss";
import tabsImg from "../../assets/tabs.jpeg";
import junojumpImg from "../../assets/junojump.png";
import snakeImg from "../../assets/snake.gif";

function MyWork() {
  const images = [tabsImg, junojumpImg, snakeImg];
  const previews = images.map((img, index) => (
    <WorkPreview img={img} key={index} />
  ));

  return (
    <div className="col">
      <div className="row mx-0 mt-5 justify-content-between">
        <h4>My Work</h4>
        <a href="/#">
          <h5>See More</h5>
        </a>
      </div>
      <div className="horizontal-scrolling-wrapper">{previews}</div>
    </div>
  );
}

export default MyWork;
