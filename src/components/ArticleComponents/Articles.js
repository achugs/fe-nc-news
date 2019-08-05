import React, { Component } from 'react';
import ArticleList from './ArticleList';
import * as api from '../../API/api';

class Articles extends Component {
  state = {
    articles: []
  }
  render() {
    return (

      <div>
        <h2>Articles</h2>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticleData()
  }

  fetchArticleData = () => {
    api.getArticles().then((articles) => {
      this.setState({ articles })
    })

  }
}

export default Articles;
