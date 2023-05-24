import { useState, useEffect } from "react";
import { generateProblem, ToBeTyped } from "../../utils/helper";
import Header from "../Header";
import "./index.css";

const Typing = () => {
  const [userInput, setUserInput] = useState("");
  const [combination, setCombination] = useState(2);
  const [repetition, setRepetition] = useState(3);
  const [problem, setProblem] = useState("");
  const [typeKey, setTypeKey] = useState("");
  const [isGame, setIsGame] = useState(true);
  const [timeElapsedInSeconds, setTimeElapsedInSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [score, setScore] = useState(-1);
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    if (problem === userInput) {
      setProblem(generateProblem(combination, repetition));
      setUserInput("");
      setScore((prev) => prev + 1);
    }
  }, [userInput]);

  useEffect(() => {
    setTypeKey(ToBeTyped(problem, userInput));
  }, [problem, userInput]);

  useEffect(() => {
    setProblem(generateProblem(combination, repetition));
    setUserInput("");
  }, [combination, repetition, isGame]);

  const onChangeUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleCombiChange = (event) => {
    setCombination(event.target.value);
  };

  const handleRepeChange = (event) => {
    setRepetition(event.target.value);
  };

  useEffect(() => {
    const updateTime = () => {
      setTimeElapsedInSeconds((prev) => prev + 1);
    };
    const intervalId = setInterval(updateTime, 1000);
    setTimerId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [isGame]);

  useEffect(() => {
    if (timeElapsedInSeconds === 60) {
      setIsGame(false);
      clearInterval(timerId);
    }
  }, [timeElapsedInSeconds]);

  const renderSeconds = () => {
    const seconds = Math.floor(timeElapsedInSeconds % 60);

    if (seconds < 10) {
      return `0${seconds}`;
    }
    return seconds;
  };

  const renderMinutes = () => {
    const minutes = Math.floor(timeElapsedInSeconds / 60);

    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  };

  const time = `${renderMinutes()}:${renderSeconds()}`;

  const clickStartGame = () => {
    setIsGame(true);
    setTimeElapsedInSeconds(0);
    setScore(0);
    setKeyCount(0);
  };

  return isGame ? (
    <div>
      <Header timer={time} score={score} keyCount={keyCount} />
      <div className="bg-con">
        <div className="opt-con">
          <div className="combi">
            <label htmlFor="combination" className="label-c">
              Combination
            </label>
            <select
              id="combination"
              value={combination}
              onChange={handleCombiChange}
            >
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className="combi">
            <label htmlFor="repetition" className="label-c">
              Repetition
            </label>
            <select
              id="repetition"
              value={repetition}
              onChange={handleRepeChange}
            >
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>
        <p className="p-para">{problem}</p>
        <input
          type="text"
          value={userInput}
          placeholder="Type here"
          onChange={onChangeUserInput}
          onKeyDown={() => {
            setKeyCount((prev) => prev + 1);
          }}
          className="u-inp"
        />
        <p className="tbt-key">{typeKey}</p>
      </div>
    </div>
  ) : (
    <div>
      <Header score={score} keyCount={keyCount} />
      <div className="game-over-con">
        <p className="go-para">GAME OVER</p>
        <p className="sco-para">You scored {score} points</p>
        <button className="go-btn" onClick={clickStartGame}>
          Start Again
        </button>
      </div>
    </div>
  );
};

export default Typing;
