import React, { Component } from 'react';
import * as api from '../../API/api';
import ArticleCommentCard from './ArticleCommentCard';
import Loading from '../../Loading';


class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  }


  render() {
    console.log(this.state.comments)
    return (
      <div>
        <h3>Comments</h3>
        {this.state.isLoading ? <Loading /> : <ArticleCommentCard comments={this.state.comments} />}
        <ArticleCommentCard comments={this.state.comments} />
      </div>
    );
  }
  componentDidMount() {

    this.fetchCommentData()
  }
  fetchCommentData = () => {
    console.log(this.props.article_id)
    api.getCommentsData(this.props.article_id).then((comments) => { this.setState({ comments, isLoading: false }) })
  }
}

export default ArticleComments;