import React, { useContext } from "react";
import { Scores } from "../App";
function Question(props) {
  for (let els of Object.keys(props.qst)) {
    if (typeof props.qst[els] == "string") {
      props.qst[els] = props.qst[els].replace("&#039;", "'");
      props.qst[els] = props.qst[els].replace("&amp;", "and");
      props.qst[els] = props.qst[els].replace("&divide;", "/");
      props.qst[els] = props.qst[els].replace("&quot;", "'");
    }
  }
  let score = useContext(Scores);
  function change(e) {
    if (e.target.value == props.qst.correct) {
      score.setScore(score.score + 5);
    }
  }

  return (
    <div>
      <h3>{props.qst.question}</h3>
      <label htmlFor="option1">{props.qst.option1}</label>
      <input
        type="radio"
        name={"" + props.qst.question}
        value={props.qst.option1}
        onChange={change}
      />
      <br></br>
      <label htmlFor="option2">{props.qst.option2}</label>
      <input
        type="radio"
        name={"" + props.qst.question}
        value={props.qst.option2}
        onChange={change}
      />
      <br></br>
      <label htmlFor="option3">{props.qst.option3}</label>
      <input
        type="radio"
        name={"" + props.qst.question}
        value={props.qst.option3}
        onChange={change}
      />
      <br></br>
      <label htmlFor="option4">{props.qst.option4}</label>
      <input
        onChange={change}
        type="radio"
        name={"" + props.qst.question}
        value={props.qst.option4}
      />
    </div>
  );
}
export default Question;
