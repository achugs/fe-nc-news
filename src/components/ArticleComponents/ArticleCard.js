import React, { Component } from "react";
import * as api from "../../API/api";
import ErrorHandlingDisplay from "../../ErrorHandlingDisplay";
import Loading from "../../Loading";
import Voting from "./Voting";
import styles from "./ArticleCard.module.css";
import ArticleComments from "./ArticleComments";

class ArticleCard extends Component {
  state = {
    article: [],
    isLoading: true,
    error: null
  };

  render() {
    const { article, isLoading, error } = this.state;
    const { id, username } = this.props;
    if (error) return <ErrorHandlingDisplay {...error} />;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className={styles.articleCard}>
              <h1>{article.title}</h1>
              <h2>Level type: {article.topic}</h2>
              <p>{article.body}</p>
              <p>Player: {article.author}</p>
              <p>Spawned: {new Date(article.created_at).toLocaleString()}</p>
              <Voting article_id={id} votes={article.votes} />
            </div>
            <p className={styles.articleCardCommentCount}>
              Comments: {article.comment_count}
            </p>
            <ArticleComments
              article_id={article.article_id}
              username={username}
            />
          </>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticleCard();
  }

  fetchArticleCard = () => {
    api
      .getArticleCard(this.props.id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({
          error: { msg: err.response.data.msg, status: err.response.status },
          isLoading: false
        });
      });
  };
}

export default ArticleCard;
