import React, { Component } from 'react';
import * as api from '../../API/api';
import ErrorHandlingDisplay from '../../ErrorHandlingDisplay'
import Loading from '../../Loading';
import Voting from './Voting';
import styles from './ArticleCard.module.css';
import ArticleComments from './ArticleComments';

class ArticleCard extends Component {

  state = {
    article: [],
    isLoading: true,
    error: null
  }
  render() {
    console.log(this.state)
    const { article, isLoading, error } = this.state;
    const { id } = this.props;
    if (error) return <ErrorHandlingDisplay {...error} />
    return (
      <div>

        {isLoading ? <Loading /> :
          <div className={styles.articleCard}>
            <h2 className={styles.articleCardTitle}>{article.title}</h2>
            <h4>Topic: {article.topic}</h4>
            <p className={styles.articleCardBody}>{article.body}</p>
            <p>Posted by: {article.author}</p>
            <p>Created: {new Date(article.created_at).toLocaleString()}</p>
            <Voting article_id={id} votes={article.votes} />
            <p className={styles.articleCardCommentCount}>Comments: {article.comment_count}</p>
            <ArticleComments article_id={article.article_id} username={this.props.username} />

          </div>}


      </div>
    );
  }
  componentDidMount() {
    this.fetchArticleCard()
  }
  fetchArticleCard = () => {
    api.getArticleCard(this.props.id).then((article) => { this.setState({ article, isLoading: false }) }).catch((err) => {
      this.setState({ error: { msg: err.response.data.msg, status: err.response.status }, isLoading: false })
    })
  }
}

export default ArticleCard;

