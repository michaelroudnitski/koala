import React from "react";
import WorkPreview from "./WorkPreview";
import "./MyWork.scss";
import tabsImg from "../../assets/tabs.jpeg";
import junojumpImg from "../../assets/junojump.png";
import snakeImg from "../../assets/snake.gif";
import SectionHeader from "../Misc/SectionHeader";

const works = [
  { img: tabsImg, name: "Tabs", link: "https://tabsapp.co" },
  {
    img: junojumpImg,
    name: "Juno Jump",
    link:
      "https://play.google.com/store/apps/details?id=com.MichaelRoudnitski.Slider",
  },
  {
    img: snakeImg,
    name: "Snake",
    link: "https://github.com/michaelroudnitski/Snake-2015",
  },
];

function MyWork() {
  const previews = works.map((work, index) => (
    <WorkPreview img={work.img} name={work.name} link={work.link} key={index} />
  ));

  return (
    <div className="col">
      <SectionHeader title="My Work" />
      <div className="horizontal-scrolling-wrapper">{previews}</div>
    </div>
  );
}

export default MyWork;
