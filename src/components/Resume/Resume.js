import React from "react";
import SectionHeader from "../Misc/SectionHeader";
import Entry from "./Entry";

import ibmLogo from "../../assets/ibm.jpg";
import cmLogo from "../../assets/cm.png";
import yorkLogo from "../../assets/york.jpg";

const resume = [
  {
    title: "SWE Intern",
    years: "2020-present",
    logoUrl: ibmLogo,
  },
  {
    title: "Full Stack Developer",
    years: "2018-2019",
    logoUrl: cmLogo,
  },
  {
    title: "(Hon) BSc. Computer Science",
    years: "2017-2021",
    logoUrl: yorkLogo,
  },
];

function Resume() {
  const entries = resume.map(({ title, years, logoUrl }, index) => (
    <Entry title={title} years={years} logoUrl={logoUrl} key={index} />
  ));

  return (
    <div className="col">
      <SectionHeader title="Resume" link="/#" linkTitle="Download" />
      {entries}
    </div>
  );
}

export default Resume;
