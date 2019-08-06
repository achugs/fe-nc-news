import React, { Component } from 'react';
import ArticleList from './ArticleList';
import * as api from '../../API/api';
import SortArticles from './SortArticles';


class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  }
  render() {
    return (

      <div>
        <h2>Articles</h2>
        <SortArticles fetchArticleData={this.fetchArticleData} />

        {this.state.isLoading ? <h3>is Loading</h3> : <ArticleList articles={this.state.articles} />}

      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticleData()
  }

  fetchArticleData = (query) => {
    console.log(query)
    api.getArticles(query).then((articles) => {
      this.setState({ articles, isLoading: false })
    })

  }

}

export default Articles;
