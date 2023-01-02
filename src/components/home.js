import React from "react";
import Questions from "./questions";
import Time from "./time";
import { useState } from "react";
function Home(props) {
  let [questions, setQuestions] = useState([]);
  const [ref, setref] = useState(0);
  let c = "";
  let j = document.cookie.split(";");
  console.log(j[0]);
  for (var i = 0; i < j[0].length; i++) {
    c +=
      j[0][i] in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        ? j[0][i]
        : "";
  }
  function fn(callback) {
    let h = new XMLHttpRequest();
    h.onreadystatechange = () => {
      if (h.readyState == 4 && h.status == 200) {
        questions = JSON.parse(h.response);
        callback(questions);
        props.play(true);
      }
    };
    h.open("GET", "http://127.0.0.1/pj/download.php", true);
    h.send();
  }
  fn((qst) => {
    if (props.force == 1) {
      setQuestions(qst);
      props.fn();
    }
  });

  return (
    <div>
      <Questions qst={questions} />
      {questions.length > 10 && <Time time={parseInt(c)} play={props.play} />}
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          clearInterval(ref);
          props.play(false);
        }}
      >
        score
      </button> */}
    </div>
  );
}
export default Home;
