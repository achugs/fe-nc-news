import React from 'react';
import CommentVoting from './CommentVoting';
import styles from './ArticleCommentCard.module.css';


const ArticleCommentCard = (props) => {
  return (
    <div>
      {props.comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>Player: {comment.author}</p>
            <p>Spawned: {new Date(comment.created_at).toLocaleString()}</p>
            <CommentVoting comment_id={comment.comment_id} votes={comment.votes} />
            {(props.username === comment.author ?
              <button onClick={() => props.handleDelete(comment.comment_id)} className={styles.delete}>Delete Comment</button> : '')}
          </li>
        );
      })}
    </div>
  )

};

export default ArticleCommentCard;