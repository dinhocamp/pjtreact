import React, { useContext } from "react";
import { Scores } from "../App";
function Score(props) {
  let score = useContext(Scores);
  return (
    <div>
      {score.score} <br></br>
      <button onClick={() => props.logout()}>logout </button>
    </div>
  );
}

export default Score;
