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
    const { comments } = this.state;
    const { username, article_id } = this.props;
    return (
      <div>
        <AddComment
          username={username}
          article_id={article_id}
          addComment={this.addComment}
        />
        <h3>Comments</h3>
        {this.state.isLoading ? <Loading /> : <ArticleCommentCard comments={comments} handleDelete={this.handleDelete} username={username} />}


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
  handleDelete = (comment_id) => {
    api.deleteCommentById(comment_id)
    this.setState({ comments: this.state.comments.filter(comment => comment.comment_id !== comment_id) })
  };
}

export default ArticleComments;