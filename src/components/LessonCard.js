import React from "react";

import "./LessonCard.css";

const LessonCard = ({ id, content, title }) => (
  <div className="lesson" id={id}>
    <h1 className="lesson-title gradient">{title}</h1>
    <div className="lesson-content">{content}</div>
  </div>
);

export default LessonCard;
