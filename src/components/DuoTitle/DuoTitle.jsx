import React from "react";
import "./DuoTitle.scss";

const DuoTitle = ({ japTitle, engTitle }) => {
  return (
    <div className="title">
      <h2 className="title__jap">{japTitle}</h2>
      <h1 className="title__eng">{engTitle}</h1>
    </div>
  );
};

export default DuoTitle;
