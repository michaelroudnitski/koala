import React from "react";
import WorkPreview from "../Misc/WorkPreview";
import "./MyWork.scss";
import tabsImg from "../../assets/tabs.jpeg";
import junojumpImg from "../../assets/junojump.png";
import snakeImg from "../../assets/snake.gif";
import SectionHeader from "../Misc/SectionHeader";

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
      <SectionHeader title="My Work" link="/#" linkTitle="See More" />
      <div className="horizontal-scrolling-wrapper">{previews}</div>
    </div>
  );
}

export default MyWork;
