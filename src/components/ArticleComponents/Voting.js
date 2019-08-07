import React, { Component } from 'react';
import * as api from '../../API/api';
import styles from './Voting.module.css';

class Voting extends Component {

  state = {
    voteInc: 0
  }
  render() {
    const { votes } = this.props;
    const { voteInc } = this.state;
    return (
      <div className={styles.votingBody}>
        <button className={styles.votesLove} onClick={() => { this.voteUpdate(+1) }} disabled={voteInc >= 1}><span role='img' aria-label="love"> ❤️</span></button>
        <p className={styles.votesTally}>Votes: {votes + voteInc}</p>
        <button className={styles.votesHate} onClick={() => { this.voteUpdate(-1) }} disabled={voteInc < 0}><span role='img' aria-label="hate"> 💔</span></button>
      </div >
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