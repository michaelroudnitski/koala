import React from "react";
import WorkPreview from "../Misc/WorkPreview";
import "./MyWork.scss";
import tabsImg from "../../assets/tabs.jpeg";
import junojumpImg from "../../assets/junojump.png";
import snakeImg from "../../assets/snake.gif";

const works = [
  { img: tabsImg, name: "Tabs" },
  { img: junojumpImg, name: "Juno Jump" },
  { img: snakeImg, name: "Snake" },
];

function MyWork() {
  const previews = works.map((work, index) => (
    <WorkPreview img={work.img} name={work.name} key={index} />
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
