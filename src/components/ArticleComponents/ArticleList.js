import React from 'react';

const ArticleList = (props) => {

  return (
    <ul>
      {props.articles.map(article => {
        return (
          <li key={article.title} >
            <h4>{article.title}</h4>
            <p>{article.body}</p>
            <p>Posted by: {article.author}</p>
            <p>Time: {article.created_at}</p>
            <p>Vote: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </li>
        )
      })}
    </ul>
  );
};

export default ArticleList;