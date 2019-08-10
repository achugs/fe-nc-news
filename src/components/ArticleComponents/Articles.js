import React, { Component } from 'react';
import ArticleList from './ArticleList';
import * as api from '../../API/api';
import SortArticles from './SortArticles';
import Loading from '../../Loading';
import styles from './Articles.module.css';



class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  }
  render() {
    return (

      <div className={styles.articles}>
        <h2 className={styles.articlesTitle}>Articles</h2>
        <SortArticles className={styles.sortArticles} fetchArticleData={this.fetchArticleData} />

        {this.state.isLoading ? <Loading /> : <ArticleList articles={this.state.articles} username={this.props.username} />}

      </div>
    );
  }
  componentDidMount = () => {

    this.fetchArticleData()
  }

  fetchArticleData = (query) => {
    api.getArticles(query).then((articles) => {
      this.setState({ articles, isLoading: false })
    })

  }



  componentDidUpdate = (prevProps, prevState) => {

    if (prevProps !== this.props) {
      this.fetchArticleData({ topic: this.props.topic });
    }
  };

}

export default Articles;
