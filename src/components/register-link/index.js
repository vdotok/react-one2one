import React from "react";
import { Link } from "react-router-dom";
import { Question } from "./styles";
function RegisterLink(props) {
  const {
    className,
    margin,
    questionColor,
    titleColor,
    question,
    link,
    title,
  } = props;
  return (
    <Question
      className={className}
      margin={margin}
      questionColor={questionColor}
      titleColor={titleColor}
    >
      {question}{" "}
      <Link to={link} className="question_title">
        {title}
      </Link>
    </Question>
  );
}

export default RegisterLink;
