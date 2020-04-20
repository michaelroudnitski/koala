import React from "react";
import SkillCard from "./SkillCard";
import SectionHeader from "../Misc/SectionHeader";
import "./MySkills.scss";

const skills = [
  {
    title: "Full Stack Development",
    body:
      "I work with the latest frameworks and technologies to deliver great front end experiences.",
    color: "#EB5757",
  },
  {
    title: "UI_UX",
    body:
      "I always design and wireframe my apps with the user in mind to create enjoyable experiences.",
    color: "#ffd400",
  },
  {
    title: "Mobile (Flutter)",
    body: "I created an app used by thousands called Tabs using Flutter.",
    color: "#68D0F8",
  },
];

function MySkills() {
  const skillCards = skills.map((skill, index) => (
    <SkillCard
      key={index}
      title={skill.title}
      body={skill.body}
      color={skill.color}
    />
  ));

  return (
    <div className="col">
      <SectionHeader title="Specializing In" />
      <div className="row">{skillCards}</div>
    </div>
  );
}

export default MySkills;
