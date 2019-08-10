import React from 'react';
import { Link } from "@reach/router"
import styles from './ArticleList.module.css';



const ArticleList = (props) => {
  return (
    < div className={styles.articlesTitle} >
      {props.articles.map(article => {
        return (
          <li key={article.title}   >
            <Link to={`/articles/${article.article_id}`} className={styles.articleTitleLink}><h4 >{article.title}</h4></Link>
            <p>Level type: {article.topic}</p>
            <p>Player: {article.author}</p>
            <p>Spawned: {new Date(article.created_at).toLocaleString()}</p>
            <p>Lives: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>

          </li>
        )
      })}
    </ div>
  );

};

export default ArticleList;