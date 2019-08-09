import React, { Component } from 'react';
import * as api from '../../API/api';

class AddComment extends Component {
  state = {
    comment: ""
  };
  render() {
    const { comment } = this.state;
    return (
      <>
        <h3>Add a comment</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={comment}
            rows='6'
            cols='35'
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
  handleChange = (event) => {
    this.setState({ comment: event.target.value });
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