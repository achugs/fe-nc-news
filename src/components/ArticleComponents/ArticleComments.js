import React, { Component } from 'react';
import * as api from '../../API/api';
import ArticleCommentCard from './ArticleCommentCard';
import Loading from '../../Loading';
import AddComment from './AddComment';
import styles from './ArticleComments.module.css';
import ErrorHandlingDisplay from '../../ErrorHandlingDisplay';


class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null
  }


  render() {
    const { comments, error, isLoading } = this.state;
    const { username, article_id } = this.props;
    if (error) return <ErrorHandlingDisplay {...error} />
    return (
      <div className={styles.articleComments}>
        <AddComment
          username={username}
          article_id={article_id}
          addComment={this.addComment}
        />
        <h3 className={styles.commentsTitle}>Comments</h3>
        {isLoading ? <Loading /> : <ArticleCommentCard comments={comments} handleDelete={this.handleDelete} username={username} />}


      </div>
    );
  }
  componentDidMount() {
    this.fetchCommentData()
  }

  fetchCommentData = () => {
    const { article_id } = this.props
    api.getCommentsData(article_id).then((comments) => { this.setState({ comments, isLoading: false }) })
  }

  addComment = comment => {
    this.setState(currentState => {
      const comments = [comment, ...currentState.comments];
      return { comments };
    });
  };
  handleDelete = (comment_id) => {
    const { comments } = this.state;
    api.deleteCommentById(comment_id)
    this.setState({ comments: comments.filter(comment => comment.comment_id !== comment_id) }).catch(({ response }) => {
      this.setState({ error: { msg: response.data.msg, status: response.status }, isLoading: false })
    })
  };
}

export default ArticleComments;