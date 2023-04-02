import { useState } from "react";

const Statics = ({ good, bad, neutral }) => {
  return (
    <div>
      <h1>Statics</h1>
      <p>Good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + bad + neutral}</p>
      <p>avarage {(good * 1 + bad * -1) / (good + bad + neutral)}</p>
      <p>posotive {(good * 1) / (good + bad + neutral)}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feed Back</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
