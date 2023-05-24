import "./index.css";

const Header = ({ timer, score, keyCount }) => {
  return (
    <nav className="nav-con">
      <h1 className="nav-head">Touch Typing 'asdfjkl; '</h1>
      {timer ? <p className="timer">{timer}</p> : null}
      {score >= 0 ? <p className="score-kc-para">score : {score}</p> : null}
      {keyCount >= 0 ? (
        <p className="score-kc-para">keyCount : {keyCount}</p>
      ) : null}
    </nav>
  );
};

export default Header;
