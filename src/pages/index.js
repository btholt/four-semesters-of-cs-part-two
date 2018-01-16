import React from "react";
import LessonCard from "../components/LessonCard";
import Link from "gatsby-link";

import "./index.css";

const IndexPage = () => (
  <div className="index">
    <div className="jumbotron gradient">
      <h1>4 Semesters of CS in 5 Hours</h1>
      <h2>Part II</h2>
    </div>

    <LessonCard
      title="Bloom Filters"
      content="Bloom filters are cool"
      id="bloom-filters"
    />
  </div>
);

export default IndexPage;
