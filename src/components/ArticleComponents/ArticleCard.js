import React, { Component } from 'react';
import * as api from '../../API/api';

class ArticleCard extends Component {

  state = {
    article: null,
    isLoading: true
  }
  render() {
    console.log(this.state)
    const { article, isLoading } = this.state;
    return (
      <div>

        {isLoading ? <p>Loading</p> :
          <div>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>Posted by: {article.author}</p>
            <p>Time: {article.created_at}</p>
            <p>Vote: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </div>}


      </div>
    );
  }
  componentDidMount() {
    this.fetchArticleCard()
  }
  fetchArticleCard = () => {
    console.log(this.props)
    api.getArticleCard(this.props.id).then((article) => { this.setState({ article, isLoading: false }) })
  }
}

export default ArticleCard;

