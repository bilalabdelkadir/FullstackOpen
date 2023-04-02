import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 3,
    1: 0,
    2: 4,
    3: 2,
    4: 4,
    5: 2,
    6: 3,
    7: 2,
  });

  const onNextAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
    console.log(selected);
  };

  const onVote = () => {
    const copy = { ...votes };

    copy[selected] += 1;
    setVotes(copy);
  };

  const getMostVoted = () => {
    let mostVoted = 0;
    let mostVotedIndex = 0;

    for (const index in votes) {
      if (votes[index] > mostVoted) {
        mostVoted = votes[index];
        mostVotedIndex = index;
      }
    }
    return mostVotedIndex;
  };

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={onVote}>vote</button>
        <button onClick={onNextAnecdotes}>next anecdotes</button>
      </div>
      <div>
        <h2>Anecdote with the most votes</h2>
        <p>{anecdotes[getMostVoted()]}</p>
        <p>has {votes[getMostVoted()]} votes</p>
      </div>
    </>
  );
};

export default App;
