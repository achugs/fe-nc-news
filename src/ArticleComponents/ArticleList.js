import React from 'react';
import { Link } from "@reach/router"

const ArticleList = (props) => {

  return (
    <ul>
      {props.articles.map(article => {
        return (
          <li key={article.title} >
            <Link to={`/articles/${article.article_id}`}><h4>{article.title}</h4></Link>

            <p>{article.body}</p>
            <p>Posted by: {article.author}</p>
            <p>Time: {article.created_at.slice(0, 16)}</p>
            <p>Vote: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </li>
        )
      })}
    </ul>
  );
};

export default ArticleList;