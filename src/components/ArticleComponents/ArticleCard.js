import React, { Component } from 'react';
import * as api from '../../API/api';
import ErrorHandlingDisplay from '../../ErrorHandlingDisplay'
import { Link } from "@reach/router"
import Loading from '../../Loading';
import Voting from './Voting';
import styles from './ArticleCard.module.css';

class ArticleCard extends Component {

  state = {
    article: null,
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
            <p className={styles.articleCardBody}>{article.body}</p>
            <p>Posted by: {article.author}</p>
            <p>Created: {article.created_at.slice(0, 16)}</p>
            <Voting article_id={id} votes={article.votes} />
            <Link to={`/articles/${article.article_id}/comments`} ><p className={styles.articleCardCommentCount}>Comments: {article.comment_count}</p></Link>

          </div>}


      </div>
    );
  }
  componentDidMount() {
    this.fetchArticleCard()
  }
  fetchArticleCard = () => {
    console.log(this.props)
    api.getArticleCard(this.props.id).then((article) => { this.setState({ article, isLoading: false }) }).catch((err) => {
      console.dir(err)
      this.setState({ error: { msg: err.response.data.msg, status: err.response.status }, isLoading: false })
    })
  }
}

export default ArticleCard;

