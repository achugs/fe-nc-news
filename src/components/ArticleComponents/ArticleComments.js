import React, { Component } from 'react';
// import * as api from '../../API/api';


class ArticleComments extends Component {
  state = {
    comments: null
  }
  render() {
    return (
      <div>
        <p>here</p>
      </div>
    );
  }
  componentDidMount() {
    this.fetchCommentData()
  }
  fetchCommentData = () => {

  }
}

export default ArticleComments;