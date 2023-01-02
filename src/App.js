import React, { useState, useEffect } from "react";
import Login from "./components/login";
import Home from "./components/home";
import Score from "./components/score";
import Signup from "./components/signup";
const Scores = React.createContext({
  score: 0,
  setScore: (score) => {
    this.score = score;
    console.log(this.score);
  },
});
function App() {
  const [force, setForce] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
  const [Signed, setSigned] = useState(true);
  const [isPlaying, setPlay] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "user") {
      setIsLogged(true);
    }
  }, []);
  useEffect(() => {
    if (document.cookie.length > 0) {
      setPlay(true);
    }
  }, [isPlaying]);
  const fn = () => {
    setForce(2);
  };
  const sign = (bol) => {
    setSigned(bol);
    console.log(Signed);
  };
  const login = () => {
    document.cookie = "time=50;Max-Age=50";
    console.log(document.cookie);
    localStorage.setItem("token", "user");
    setPlay(true);
    setIsLogged(true);
  };
  const play = (bol) => {
    console.log(bol);
    setPlay(bol);
  };
  const logout = () => {
    localStorage.removeItem("token");
    document.cookie = "time=0;Max-Age=0";
    setPlay(false);
    setIsLogged(false);
  };

  return (
    <React.Fragment>
      <Scores.Provider value={{ score, setScore }}>
        <main>
          {!isLogged && !isPlaying && !Signed && (
            <Signup sign={sign} play={play} login={login} />
          )}
          {!isLogged && !isPlaying && Signed && (
            <Login login={login} play={play} sign={sign} />
          )}
          {!isPlaying && isLogged && <Score logout={logout} />}
          {isLogged && isPlaying && (
            <Home logout={logout} force={force} fn={fn} play={play} />
          )}
        </main>
      </Scores.Provider>
    </React.Fragment>
  );
}
export { Scores };
export default App;
