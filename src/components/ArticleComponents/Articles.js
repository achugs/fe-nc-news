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

      <div>
        <h2 className={styles.articlesTitle}>Articles</h2>
        <SortArticles fetchArticleData={this.fetchArticleData} />

        {this.state.isLoading ? <Loading /> : <ArticleList articles={this.state.articles} />}

      </div>
    );
  }
  componentDidMount = () => {

    this.fetchArticleData()
  }

  fetchArticleData = (query) => {
    console.log(query)
    api.getArticles(query).then((articles) => {
      console.log({ articles })

      this.setState({ articles, isLoading: false })
    })

  }
  componentDidUpdate = (prevProps, prevState) => {

    if (prevProps !== this.props) {
      console.log({ topic: this.props.topic.topic })
      this.fetchArticleData({ topic: this.props.topic });
    }
  };

}

export default Articles;
