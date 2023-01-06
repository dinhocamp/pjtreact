import React, { useEffect, useState } from "react";
function Time(props) {
  const [time, setTime] = useState(props.time);
  const [myvar, setmyvar] = useState(0);
  const [clicked, setclick] = useState(false);
  useEffect(() => {
    setclick(true);
  }, [clicked]);
  useEffect(() => {
    if (clicked) {
      props.play(false);
      clearTimeout(myvar);
      return;
    }
    function deb(counter) {
      function ber() {
        counter--;
        setTime(counter);
        document.cookie = `time=${counter};Max-age=${counter}`;
        console.log(clicked);
        if (clicked || counter == 0) {
          document.cookie = `time=0;Max-age=0`;
          clearTimeout(myvar);
          props.play(false);
          return;
        } else {
          setmyvar(setTimeout(ber, 1000));
        }
      }
      ber();
    }
    deb(time);
  }, [clicked]);
  return (
    <>
      <h3>
        <p>time left :</p> {time}
      </h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          setclick(true);
        }}
      >
        score
      </button>
    </>
  );
}

export default Time;
