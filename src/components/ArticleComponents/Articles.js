import React, { Component } from 'react';
import ArticleList from './ArticleList';
import * as api from '../../API/api';
import SortArticles from './SortArticles';
import Loading from '../../Loading';



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
      this.setState({ articles, isLoading: false })
    })

  }

}

export default Articles;
