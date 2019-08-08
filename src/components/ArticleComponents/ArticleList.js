import React from 'react';
import { Link } from "@reach/router"
import styles from './ArticleList.module.css';


const ArticleList = (props) => {
  return (
    <ul className={styles.articlesTitle} >
      {props.articles.map(article => {
        return (
          <li key={article.title}  >
            <Link to={`/articles/${article.article_id}`}><h4 >{article.title}</h4></Link>
            <Link to={`/topics/${article.topic}`}><p>Topic : {article.topic}</p></Link>

            <p>Posted by: {article.author}</p>
            <p>Time: {article.created_at.slice(0, 16)}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </li>
        )
      })}
    </ul>
  );
};

export default ArticleList;