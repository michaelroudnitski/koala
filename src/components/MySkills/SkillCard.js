import React from "react";
import Dots from "../Misc/Dots";

// !TODO Make top-colored-line expand on hover

function SkillCard({ title, body, color }) {
  return (
    <div className="col-md-4 col-12 my-2">
      <div className="p-4 border rounded skill-card">
        <div className="top-colored-line" style={{ background: color }}></div>
        <Dots bottom={0} height={40} width={60} />
        <p>
          <strong>{title}</strong>
        </p>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default SkillCard;
