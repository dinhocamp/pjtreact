import React from "react";
import "./signup.css";
import { useState, useEffect } from "react";
function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlepassword = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    let y = setTimeout(() => {
      console.log("the email is", email);
      console.log("from effect");
    }, 750);
    return () => {
      clearTimeout(y);
    };
  }, [email]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          function fn(callback) {
            let h = new XMLHttpRequest();
            h.onreadystatechange = () => {
              if (h.readyState == 4 && h.status == 200) {
                console.log("server say", h.response);
                callback(h.response);
              }
            };
            h.open("POST", "http://127.0.0.1/pj/con.php", true);
            h.send(JSON.stringify({ email: email, pass: password }));
          }
          fn((str) => {
            if (str == "created") {
              props.sign(true);
              props.login();
              props.play(true);
              alert("welcome");
            } else if (str == "email existscreated") {
              props.sign(true);
              props.login();
              props.play(true);
            } else {
              console.log(str, "error from server");
              // props.sign(false);
            }
          });
        }}
      >
        <label>enter email </label>
        <input type="email" onChange={handleEmail} />
        <label>enter password </label>
        <input type="password" onChange={handlepassword} />
        <button type="submit">Sign UP</button>
      </form>
    </div>
  );
}

export default Signup;
