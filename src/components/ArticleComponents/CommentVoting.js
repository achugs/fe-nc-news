import React, { Component } from 'react';
import * as api from '../../API/api';

class CommentVoting extends Component {
  state = {
    voteInc: 0
  }
  render() {
    const { votes } = this.props;
    const { voteInc } = this.state;
    return (
      <div>
        <button onClick={() => { this.voteUpdate(+1) }} disabled={voteInc >= 1}><span role='img' aria-label="love"> ❤️</span></button>
        <p >Votes: {votes + voteInc}</p>
        <button onClick={() => { this.voteUpdate(-1) }} disabled={voteInc < 0}><span role='img' aria-label="hate"> 💔</span></button>
      </div>
    );
  }
  voteUpdate = (inc_votes) => {
    console.log(inc_votes)
    const { comment_id } = this.props;
    api.patchCommentVotes(comment_id, inc_votes).catch(err => { console.dir(err) })
    this.setState(({ voteInc }) => ({
      voteInc: voteInc + inc_votes
    }))

  };
}

export default CommentVoting;