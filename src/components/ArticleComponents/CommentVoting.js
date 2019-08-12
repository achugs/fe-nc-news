import React, { Component } from 'react';
import * as api from '../../API/api';
import styles from './Voting.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSkullCrossbones
} from "@fortawesome/free-solid-svg-icons";

class CommentVoting extends Component {
  state = {
    voteInc: 0
  }
  render() {
    const { votes } = this.props;
    const { voteInc } = this.state;
    return (
      <div className={styles.voting}>
        <button className={styles.votesLove} onClick={() => { this.voteUpdate(+1) }} disabled={voteInc >= 1}><FontAwesomeIcon icon={faHeart} /></button>
        <p className={styles.votesTally}>Lives: {votes + voteInc}</p>
        <button className={styles.votesHate} onClick={() => { this.voteUpdate(-1) }} disabled={voteInc < 0}><FontAwesomeIcon icon={faSkullCrossbones} /></button>
      </div >
    );
  }
  voteUpdate = (inc_votes) => {
    const { comment_id } = this.props;
    api.patchCommentVotes(comment_id, inc_votes).catch(err => { console.dir(err) })
    this.setState(({ voteInc }) => ({
      voteInc: voteInc + inc_votes
    }))

  };
}

export default CommentVoting;