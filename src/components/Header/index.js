import { useSelector } from "react-redux";
import {
  getTotalProblemsCount,
  getTotalKeyStrokes,
  getAccuracy,
} from "../../utils/helper";

import "./index.css";

const Header = ({ time, score }) => {
  const ProblemsArray = useSelector((store) => store.app.items);
  const KeyCountArray = useSelector((store) => store.app.keyStrokes);
  const problemCount = getTotalProblemsCount(...ProblemsArray);

  const keyStrokeCount = getTotalKeyStrokes(...KeyCountArray);

  const accuracy = getAccuracy(problemCount, keyStrokeCount);

  return (
    <nav className="nav-con">
      <h1 className="nav-head">Touch Typing 'asdfjkl; '</h1>
      {time ? <p className="timer">{time}</p> : null}
      <p className="score-kc-para">score : {score}</p>
      {isNaN(accuracy) ? (
        <p className="score-kc-para">Accuracy : </p>
      ) : (
        <p className="score-kc-para">Accuracy : {accuracy} %</p>
      )}
    </nav>
  );
};

export default Header;
