import React, { Component } from 'react';
import * as api from '../../API/api';
import ErrorHandlingDisplay from '../../ErrorHandlingDisplay'
import { Link } from "@reach/router"

class ArticleCard extends Component {

  state = {
    article: null,
    isLoading: true,
    error: null
  }
  render() {
    console.log(this.state)
    const { article, isLoading, error } = this.state;
    if (error) return <ErrorHandlingDisplay {...error} />
    return (
      <div>

        {isLoading ? <p>Loading</p> :
          <div>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>Posted by: {article.author}</p>
            <p>Created: {article.created_at.slice(0, 16)}</p>
            <p>Vote: {article.votes}</p>
            <Link to={`/articles/${article.article_id}/comments`}><p>Comments: {article.comment_count}</p></Link>

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

