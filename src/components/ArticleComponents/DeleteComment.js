import React, { Component } from 'react';
import * as api from '../../API/api';
import { navigate } from "@reach/router"

class DeleteComment extends Component {
  render() {
    return (
      <button onClick={this.deleteComment}>Delete</button>
    );
  }
  deleteComment = () => {
    const { comment_id } = this.props
    api.deleteCommentById(comment_id).then(response => navigate('/articles/'))
  }
}

export default DeleteComment;