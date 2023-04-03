import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course["name"]} />
      <Content parts={course.parts} />
      <Total
        sum={course.parts.reduce((acc, curr) => acc + curr.exercises, 0)}
      />
    </div>
  );
};

export default Course;
