import React from "react";

import "./TOCCard.css";

const LessonCard = ({ content, title }) => (
  <div className="lesson">
    <h1 className="lesson-title gradient">{title}</h1>
    <div className="lesson-content">
      <ol>
        {content.map(lesson => (
          <li key={lesson.node.frontmatter.path}>
            <a href={lesson.node.frontmatter.path}>
              {lesson.node.frontmatter.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default LessonCard;
