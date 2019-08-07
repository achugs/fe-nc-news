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
    if (this.props.topic) {
      this.fetchArticleData({ topic: this.props.topic })
    }
    else this.fetchArticleData()
  }

  fetchArticleData = (topic, query) => {
    console.log(query)
    api.getArticles(topic, query).then((articles) => {
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
