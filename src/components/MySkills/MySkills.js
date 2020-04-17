import React from "react";
import SkillCard from "./SkillCard";
import SectionHeader from "../Misc/SectionHeader";
import "./MySkills.scss";

const skills = [
  {
    title: "Full Stack Development",
    body: "My front end experience here.",
    color: "#EB5757",
  },
  {
    title: "UI/UX",
    body: "My UI/UIX experience here",
    color: "#ffd400",
  },
  {
    title: "Mobile (Flutter)",
    body: "My Flutter experience here",
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
