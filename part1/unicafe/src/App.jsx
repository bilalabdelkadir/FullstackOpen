import { useState } from "react";

const Statics = ({ good, bad, neutral, sum }) => {
  if (sum === 0) {
    return <p>No Feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={sum} />
        <StatisticLine text={"avarage"} value={(good * 1 + bad * -1) / sum} />
        <StatisticLine text={"positive"} value={`${(good * 1) / sum}%`} />
      </tbody>
    </table>
  );
};

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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
    setBad(bad + 1);
    setSum(sum + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setSum(sum + 1);
  };

  return (
    <div>
      <h1>Give Feed Back</h1>
      <div>
        <Button text={"Good"} handler={handleGood} />
        <Button text={"Neutral"} handler={handleNeutral} />
        <Button text={"Bad"} handler={handleBad} />
      </div>
      <h1>Statics</h1>
      <Statics good={good} bad={bad} neutral={neutral} sum={sum} />
    </div>
  );
};

export default App;
