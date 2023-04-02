import { useState } from "react";

const Statics = ({ good, bad, neutral, sum }) => {
  if (sum === 0) {
    return <p>No Feedback given</p>;
  }
  return (
    <div>
      <p>Good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {sum}</p>
      <p>avarage {(good * 1 + bad * -1) / sum}</p>
      <p>posotive {(good * 1) / sum}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [sum, setSum] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setSum(sum + 1);
  };

  const handleBad = () => {
    setBad(good + 1);
    setSum(sum + 1);
  };

  const handleNeutral = () => {
    setNeutral(good + 1);
    setSum(sum + 1);
  };

  return (
    <div>
      <h1>Give Feed Back</h1>
      <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleBad}>neutral</button>
        <button onClick={handleNeutral}>bad</button>
      </div>
      <h1>Statics</h1>
      <Statics good={good} bad={bad} neutral={neutral} sum={sum} />
    </div>
  );
};

export default App;
