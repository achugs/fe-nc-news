import React, { Component } from 'react';
import * as api from '../../API/api';
import ArticleCommentCard from './ArticleCommentCard';
import Loading from '../../Loading';
import AddComment from './AddComment';


class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
  }


  render() {
    console.log(this.props.username, 'acprops')
    const { username, article_id } = this.props;
    return (
      <div>
        <AddComment
          username={username}
          article_id={article_id}
          addComment={this.addComment}
        />
        <h3>Comments</h3>
        {this.state.isLoading ? <Loading /> : <ArticleCommentCard comments={this.state.comments} />}


      </div>
    );
  }
  componentDidMount() {
    this.fetchCommentData()
  }

  fetchCommentData = () => {
    api.getCommentsData(this.props.article_id).then((comments) => { this.setState({ comments, isLoading: false }) })
  }

  addComment = comment => {
    this.setState(currentState => {
      const comments = [comment, ...currentState.comments];
      return { comments };
    });
  };
}

export default ArticleComments;