import React from "react";
import Question from "./question";
function Questions(props) {
  return (
    <div>
      {props.qst.map((el) => (
        <Question qst={el} key={el.id} />
      ))}
    </div>
  );
}

export default Questions;
