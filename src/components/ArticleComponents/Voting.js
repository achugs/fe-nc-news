import React, { Component } from 'react';
import * as api from '../../API/api';

class Voting extends Component {

  state = {
    voteInc: 0
  }
  render() {
    const { votes } = this.props;
    const { voteInc } = this.state;
    return (
      <div>
        <button onClick={(() => { this.voteUpdate(+1) })}><span role='img' aria-label="love"> Love it: ❤️</span></button>
        <p>Votes: {votes + voteInc}</p>
        <button onClick={(() => { this.voteUpdate(-1) })}><span role='img' aria-label="hate">Hate it: 💔</span></button>
      </div>
    );
  }
  voteUpdate = (inc_votes) => {
    console.log(inc_votes)
    const { article_id } = this.props;
    api.patchVoteIncrement(article_id, inc_votes)
    this.setState(({ voteInc }) => ({
      voteInc: voteInc + inc_votes
    }))

  };
}

export default Voting;