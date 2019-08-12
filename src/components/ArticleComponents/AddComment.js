import React, { Component } from 'react';
import * as api from '../../API/api';
import styles from './AddComment.module.css';
import ErrorHandlingDisplay from '../../ErrorHandlingDisplay';

class AddComment extends Component {

  state = {
    comment: "",
    error: null
  };

  render() {
    const { comment, error } = this.state;
    if (error) return <ErrorHandlingDisplay{...error} />
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
    api.postComment({ username, body: comment, article_id }).then(comment => {
      this.props.addComment(comment);
      this.setState({ comment: "" });
    }).catch((err) => {
      this.setState({ error: { msg: err.response.data.msg, status: err.response.status }, isLoading: false })
    })
  };

}

export default AddComment;