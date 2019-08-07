import React from 'react';

const Voting = ({ article_id, votes }) => {
  return (
    <div>
      <button><span role='img' aria-label="love"> Love it: ❤️</span></button>
      <p>Vote: {votes}</p>
      <button><span role='img' aria-label="hate">Hate it: 💔</span></button>
    </div>
  );
};

export default Voting;