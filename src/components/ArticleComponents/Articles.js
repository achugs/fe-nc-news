import React, { Component } from 'react';
import ArticleList from './ArticleList';
import * as api from '../../API/api';
import SortArticles from './SortArticles';
import Loading from '../../Loading';
import styles from './Articles.module.css';
import ErrorHandlingDisplay from '../../ErrorHandlingDisplay';



class Articles extends Component {

  state = {
    articles: [],
    isLoading: true,
    error: null
  }

  render() {
    const { isLoading, articles, error } = this.state;
    if (error) return <ErrorHandlingDisplay {...error} />
    return (
      <div className={styles.articles}>
        <h2 className={styles.articlesTitle}>Articles</h2>
        <SortArticles fetchArticleData={this.fetchArticleData} />
        {isLoading ? <Loading /> : <ArticleList articles={articles} username={this.props.username} />}
      </div>
    );
  }

  componentDidMount = () => {
    if (this.props.topic) {
      this.fetchArticleData({ topic: this.props.topic });
    }
  }

  fetchArticleData = (query) => {
    api.getArticles(query).then((articles) => {
      this.setState({ articles: articles, isLoading: false })
    }).catch(({ response }) => {
      this.setState({ error: { msg: response.data.msg, status: response.status }, isLoading: false })
    })
  }


  componentDidUpdate = (prevProps, prevState) => {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      console.log(topic)
      this.fetchArticleData({ topic: topic })
    }
  }
}


export default Articles;

