import React, { Component } from 'react';

class ArticleCard extends Component {
  render() {
    return (
      <div>
        i'm here
      </div>
    );
  }
}

export default ArticleCard;

{/* <ul>
        {props.articles.map(article => {
          return (
            <li key={article.article_id} >
              <h3>TITLE</h3>
              <p>{article.body}</p>
              <p>Posted by: {article.author}</p>
              <p>Time: {article.created_at}</p>
              <p>Vote: {article.votes}</p>
              <p>Comments: {article.comment_count}</p>
            </li>

          )
        }
        )
        }
      </ul> */}