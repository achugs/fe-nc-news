import React, { Component } from 'react';
import * as api from '../../API/api';
import styles from './AddComment.module.css';

class AddComment extends Component {
  state = {
    comment: ""
  };
  render() {
    const { comment } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.addComment}>
          <h3 className={styles.commentAddTitle}>Post a comment</h3>
          <textarea
            value={comment}
            rows='6'
            cols='60'
            onChange={this.handleChange}
            placeholder="Comment here!"
            required
          />
          <div>
            <input
              type="submit"
              value="Add!"
            />
          </div>
        </form>
      </>
    );
  }
  handleChange = ({ target }) => {
    this.setState({ comment: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    const { username, article_id } = this.props;
    console.log(this.props)
    api.postComment({ username, body: comment, article_id }).then(comment => {

      console.log({ username }, 'username')
      this.props.addComment(comment);
      this.setState({ comment: "" });
    }).catch(err => { console.dir(err) })
  };

}

export default AddComment;