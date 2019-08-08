import React, { Component } from 'react';
import * as api from '../../API/api';
import ArticleCommentCard from './ArticleCommentCard';


class ArticleComments extends Component {
  state = {
    comments: []
  }


  render() {
    console.log(this.state.comments)
    return (
      <div>
        <p>here</p>
        <h3>Comments</h3>
        <ArticleCommentCard comments={this.state.comments} />
        <p> </p>
      </div>
    );
  }
  componentDidMount() {

    this.fetchCommentData()
  }
  fetchCommentData = () => {
    console.log(this.props.article_id)
    api.getCommentsData(this.props.article_id).then((comments) => { this.setState({ comments }) })
  }
}

export default ArticleComments;